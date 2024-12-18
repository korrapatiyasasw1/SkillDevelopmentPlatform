import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    setLoading(true);
    setError('');  // Reset error message before making request

    try {
      // Make a GET request to fetch the users data
      const response = await axios.get('https://server-7tfl.onrender.com/users');
      
      // Find the user matching the entered username and password
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      // If user found and credentials match, store user data in localStorage and navigate to dashboard
      if (user) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login successful!');
        navigate('/dashboard');  // Redirect to dashboard after login
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      // Handle errors (e.g., server down, network issues)
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);  // Reset loading state after request completes
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
