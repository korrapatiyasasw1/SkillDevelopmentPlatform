import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({
    registrationNumber: '',
    studentName: '',
    email: '',
    year: '',
    profilePicture: 'https://via.placeholder.com/100', // Default image URL
  });
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState(null);

  const api_url = "http://localhost:3000/profiles" // Ensure this is correct API URL

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(api_url);
        if (response.status === 200) {
          setUser(response.data);
          setFormData(response.data);
        } else {
          setError('Failed to fetch user data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response) {
          if (error.response.status === 404) {
            setError('User not found. Please check the URL or the user ID.');
          } else {
            setError(`Error: ${error.response.status} - ${error.response.data}`);
          }
        } else if (error.request) {
          setError('No response received. Please check the server.');
        } else {
          setError('An unknown error occurred. Please try again later.');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: imageUrl });
    }
  };

  const saveChanges = async () => {
    try {
      setError(null); // Reset previous error message

      const response = await axios.put(api_url, formData); // Assuming user ID is 1
      console.log('API Response:', response);

      if (response.status === 200 || response.status === 201) {
        setUser(formData);
        setIsEditing(false);
      } else {
        setError('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again later.');
    }
  };

  const handleDeleteProfile = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        const response = await axios.delete(api_url);
        console.log('API Response:', response);
        if (response.status === 200) {
          setUser({
            registrationNumber: '',
            studentName: '',
            email: '',
            year: '',
            profilePicture: 'https://via.placeholder.com/100', // Default image URL
          }); // Clear user data
        } else {
          setError('Failed to delete profile. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting profile:', error);
        setError('Failed to delete profile. Please try again later.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Profile</h1>
      <div style={styles.profileCard}>
        <div style={styles.avatar}>
          <img
            src={formData.profilePicture} // Use dynamic profile picture URL
            alt="User Avatar"
            style={styles.avatarImage}
          />
          <div>
            <label style={styles.uploadLabel} htmlFor="profilePic">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              style={styles.uploadInput}
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div style={styles.info}>
          {error && <div style={styles.errorMessage}>{error}</div>}

          {isEditing ? (
            <div>
              <h2 style={styles.sectionHeading}>Edit Personal Info</h2>
              <label>Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                style={styles.input}
              />

              <h2 style={styles.sectionHeading}>Edit Contact Info</h2>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
              />

              <button style={styles.saveButton} onClick={saveChanges}>
                Save
              </button>
              <button
                style={styles.cancelButton}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              {error && <div style={styles.errorMessage}>{error}</div>}
            </div>
          ) : (
            <div>
              <h2 style={styles.sectionHeading}>Personal Info</h2>
              <p>
                <strong>Student Name:</strong> {user.studentName}
              </p>
              <p>
                <strong>Registration Number:</strong> {user.registrationNumber}
              </p>
              <p>
                <strong>Year:</strong> {user.year}
              </p>

              <h2 style={styles.sectionHeading}>Contact Info</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <button
                style={styles.editButton}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button style={styles.deleteButton} onClick={handleDeleteProfile}>
                Delete Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#5a2d82',
  },
  profileCard: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  avatarImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid #ddd',
  },
  uploadLabel: {
    display: 'block',
    marginTop: '10px',
    color: '#007bff',
    cursor: 'pointer',
  },
  uploadInput: {
    display: 'none',
  },
  info: {
    textAlign: 'left',
  },
  sectionHeading: {
    color: '#5a2d82',
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  editButton: {
    display: 'block',
    width: '100%',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  saveButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
  },
  cancelButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  deleteButton: {
    display: 'block',
    width: '100%',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

export default Profile;