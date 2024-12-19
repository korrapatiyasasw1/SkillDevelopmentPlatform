import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [skill, setSkill] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [educationBackground, setEducationBackground] = useState('');
  const [gpa10, setGpa10] = useState('');
  const [gpa12, setGpa12] = useState('');
  const [backlog, setBacklog] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [internshipMessage, setInternshipMessage] = useState('');

  const navigate = useNavigate();

  // Handle form input changes
  const handleSkillChange = (event) => setSkill(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleNumberChange = (event) => setNumber(event.target.value);
  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleWorkExperienceChange = (event) => setWorkExperience(event.target.value);
  const handleEducationBackgroundChange = (event) => setEducationBackground(event.target.value);
  const handleGpa10Change = (event) => setGpa10(event.target.value);
  const handleGpa12Change = (event) => setGpa12(event.target.value);
  const handleBacklogChange = (event) => setBacklog(event.target.value);

  // Handle form submission
  const handleSubmitSkill = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (
      !username || !skill || !number || !fullName || !email || !workExperience ||
      !educationBackground || !gpa10 || !gpa12 || !backlog
    ) {
      setMessage('Please fill in all the fields.');
      return;
    }

    // Check if GPA is a valid number
    if (isNaN(gpa10) || isNaN(gpa12) || isNaN(backlog)) {
      setMessage('Please enter valid numbers for GPA and backlog.');
      return;
    }

    // Check for valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setMessage(''); // Clear any previous message

    try {
      // Check if user is in localStorage
      let user = JSON.parse(localStorage.getItem('user'));

      // If the user isn't in localStorage, make an API call to find the user
      if (!user || user.username !== username) {
        const response = await axios.get('https://server-7tfl.onrender.com/users');
        user = response.data.find((user) => user.username === username);
        if (!user) {
          setMessage('Username not found. Please check the username.');
          setLoading(false);
          return;
        }
      }

      // Update user data
      const updatedSkills = user.skills ? [...user.skills, skill] : [skill];
      const updatedUser = { 
        ...user, 
        skills: updatedSkills, 
        num: number,
        fullName,
        email,
        workExperience,
        educationBackground,
        gpa10,
        gpa12,
        backlog
      };

      // Update the user data on the backend
      await axios.patch(`https://server-7tfl.onrender.com/users/${user.id}`, updatedUser);

      // Save the updated user data in localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setMessage('Information updated successfully!');

      // Reset the form after successful submission
      setSkill('');
      setUsername('');
      setNumber('');
      setFullName('');
      setEmail('');
      setWorkExperience('');
      setEducationBackground('');
      setGpa10('');
      setGpa12('');
      setBacklog('');
      
    } catch (error) {
      console.error('Error adding information:', error);
      setMessage('Error updating information. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username) {
      setMessage('Please provide the username to delete.');
      return;
    }

    setLoading(true);
    setMessage(''); // Clear any previous message

    try {
      // Fetch the users data to find the user by username
      const response = await axios.get('https://server-7tfl.onrender.com/users');
      const user = response.data.find((user) => user.username === username);

      // Check if user exists
      if (!user) {
        setMessage('Username not found. Please check the username.');
        setLoading(false);
        return;
      }

      // Send a DELETE request to remove the user
      await axios.delete(`https://server-7tfl.onrender.com/users/${user.id}`);

      setMessage('User deleted successfully!');
      // Reset the form after successful deletion
      setUsername('');
      setFullName('');
      setEmail('');
      setWorkExperience('');
      setEducationBackground('');
      setGpa10('');
      setGpa12('');
      setBacklog('');
      setSkill('');
      setNumber('');
      
    } catch (error) {
      console.error('Error deleting user:', error);
      setMessage('Error deleting user. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContainer>
      <h2>Update User Information</h2>

      <Form onSubmit={handleSubmitSkill}>
        <InputWrapper>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="workExperience">Work Experience</Label>
          <TextArea
            id="workExperience"
            value={workExperience}
            onChange={handleWorkExperienceChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="educationBackground">Education Background</Label>
          <TextArea
            id="educationBackground"
            value={educationBackground}
            onChange={handleEducationBackgroundChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="gpa10">10th GPA</Label>
          <Input
            type="number"
            id="gpa10"
            value={gpa10}
            onChange={handleGpa10Change}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="gpa12">12th GPA</Label>
          <Input
            type="number"
            id="gpa12"
            value={gpa12}
            onChange={handleGpa12Change}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="skill">Skill</Label>
          <Input
            type="text"
            id="skill"
            value={skill}
            onChange={handleSkillChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="number">Phone Number</Label>
          <Input
            type="number"
            id="number"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="backlog">Backlog</Label>
          <Input
            type="number"
            id="backlog"
            value={backlog}
            onChange={handleBacklogChange}
            required
          />
        </InputWrapper>

        {message && <Message>{message}</Message>}
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Updating Information...' : 'Update Information'}
        </SubmitButton>

        {/* Delete Button */}
        <DeleteButton type="button" onClick={handleDeleteUser} disabled={loading}>
          {loading ? 'Deleting User...' : 'Delete User'}
        </DeleteButton>
      </Form>

      {internshipMessage && <InternshipMessage>{internshipMessage}</InternshipMessage>}
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

const Message = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #5d5fe7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #4b4bdf;
  }

  &:disabled {
    background-color: #c5c5e1;
    cursor: not-allowed;
  }
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #c0392b;
  }

  &:disabled {
    background-color: #c5c5c1;
    cursor: not-allowed;
  }
`;

const InternshipMessage = styled.div`
  color: green;
  font-size: 14px;
  margin-top: 15px;
`;

export default Home;
