import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');  // State for success message

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      setError('All fields are required.');
      setSuccessMessage('');  // Clear success message if there's an error
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccessMessage('');  // Clear success message if passwords don't match
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');  // Clear previous success message

    try {
      const response = await axios.post('https://server-7tfl.onrender.com/users', {
        firstName,
        lastName,
        username,
        password,
      });

      if (response.status === 201) {
        // Store the user details in localStorage (if applicable)
        const { user, token } = response.data; // Assuming the backend sends a user object and a JWT token
        
        localStorage.setItem('user', JSON.stringify(user));  // Store the user data
        localStorage.setItem('authToken', token); // Store the token for authentication
        
        setSuccessMessage('Sign-up successful! You can now log in.');
        
        // Navigate to login page after a successful sign-up
        setTimeout(() => {
          navigate('/Login');
        }, 2000); // Navigate after 2 seconds
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Sign-up failed. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </SubmitButton>
      </form>
    </SignupContainer>
  );
};

// Styled components

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
  
  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #5d5fe7;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;

const SuccessMessage = styled.div`
  color: green;
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

export default Signup;
