import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';  // Import styled-components

const Login = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both username and password are required.');
      setSuccessMessage('');  // Clear success message if there's an error
      return;
    }

    setLoading(true);
    setError('');  // Reset error message before making request
    setSuccessMessage('');  // Clear success message before making request

    try {
      const response = await axios.get('https://server-7tfl.onrender.com/users');
      
      // Find the user matching the username and password.
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Successfully logged in, store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));

        setSuccessMessage('Login successful! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');  // Redirect after 2 seconds
        }, 2000);
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}  {/* Display success message */}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </form>
    </LoginContainer>
  );
};

// Styled Components

const LoginContainer = styled.div`
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

export default Login;
