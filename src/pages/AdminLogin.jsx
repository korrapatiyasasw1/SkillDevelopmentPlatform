import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    setLoading(true);
    setError('');  // Reset error message before making request

    try {
      // Make a GET request to fetch users data
      const response = await axios.get('https://server-7tfl.onrender.com/Admins');
      const res = await axios.get('https://server-7tfl.onrender.com/users');
      await axios.post('https://server-7tfl.onrender.com/admins', res.data);

      // Find the user matching the entered username and password
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      // If user found and credentials match, store user data in localStorage and navigate to dashboard
      if (user) {
        localStorage.setItem('admin', JSON.stringify(user));  // Store the user data
        navigate('/AdminDashBoard');  // Redirect to dashboard after login
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
    <div className="login-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        {error && <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
