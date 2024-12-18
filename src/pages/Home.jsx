import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmitSkill = async (e) => {
    e.preventDefault();
    if (
      !username || !skill || !number || !fullName || !email || !workExperience ||
      !educationBackground || !gpa10 || !gpa12
    ) {
      setMessage('Please fill in all the fields.');
      return;
    }
    setLoading(true);
    setMessage('');  

    try {
      const response = await axios.get('https://server-7tfl.onrender.com/users');
      const user = response.data.find((user) => user.username === username);
      if (!user) {
        setMessage('Username not found. Please check the username.');
        setLoading(false);
        return;
      }
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

      await axios.patch(`https://server-7tfl.onrender.com/users/${user.id}`, updatedUser);

      setMessage('Information updated successfully!');

      if (updatedSkills.includes('java')) {

         
      setInternshipMessage('Congratulations! You have been selected for the Java internship.');
  
      }if (gpa10 >= 8.0 && gpa12 >= 8.0 && backlog == 0)
         {
          setInternshipMessage('Congratulations! You have been selected for the Java internship.');
        } else {
          setInternshipMessage('You are not eligible for the Java internship due to GPA.');
        }
      

      if (gpa10 < 8.0 && gpa12 < 8.0) {
        setInternshipMessage('Not Eligible for internship due to low GPA.');
      }

    } catch (error) {
      console.error('Error adding information:', error);
      setMessage('Error updating information. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="home-container">
      <h2>Update User Information</h2>
      
      <form onSubmit={handleSubmitSkill}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        {/* Work Experience input */}
        <div className="form-group">
          <label htmlFor="workExperience">Work Experience</label>
          <textarea
            id="workExperience"
            value={workExperience}
            onChange={handleWorkExperienceChange}
            required
          />
        </div>

        {/* Education Background input */}
        <div className="form-group">
          <label htmlFor="educationBackground">Education Background</label>
          <textarea
            id="educationBackground"
            value={educationBackground}
            onChange={handleEducationBackgroundChange}
            required
          />
        </div>

        {/* 10th GPA input */}
        <div className="form-group">
          <label htmlFor="gpa10">10th GPA</label>
          <input
            type="number"
            id="gpa10"
            value={gpa10}
            onChange={handleGpa10Change}
            required
          />
        </div>

        {/* 12th GPA input */}
        <div className="form-group">
          <label htmlFor="gpa12">12th GPA</label>
          <input
            type="number"
            id="gpa12"
            value={gpa12}
            onChange={handleGpa12Change}
            required
          />
        </div>

        {/* Skill input */}
        <div className="form-group">
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            id="skill"
            value={skill}
            onChange={handleSkillChange}
            required
          />
        </div>

        {/* Number input */}
        <div className="form-group">
          <label htmlFor="number">PhoneNumber</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </div>

        {/* Backlog input */}
        <div className="form-group">
          <label htmlFor="backlog">Backlog</label>
          <input
            type="number"
            id="backlog"
            value={backlog}
            onChange={handleBacklogChange}
            required
          />
        </div>
        
        {/* Message display */}
        {message && <div className="message">{message}</div>}

        {/* Submit button */}
        <button type="submit" disabled={loading}>
          {loading ? 'Updating Information...' : 'Update Information'}
        </button>
      </form>

      {/* Internship message display */}
      {internshipMessage && <div className="internship-message">{internshipMessage}</div>}
    </div>
  );
};

export default Home;
