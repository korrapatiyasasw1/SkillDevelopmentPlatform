import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: #495057;
`;

const GPA = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #6c757d;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appliedInternship, setAppliedInternship] = useState(null);
  const [applied, setApplied] = useState(false);

  const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch('https://server-7tfl.onrender.com/jobs');
        const internshipsData = await response.json();
        setInternships(internshipsData);
      } catch (error) {
        setError('Error fetching internships: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const handleApply = async (internship) => {
    if (!user) {
      alert('Please log in to apply for internships.');
      return;
    }

    const userGPA = parseFloat(user.gpa10); // Assuming 'gpa10' field is used

    if (userGPA < internship.gpa) {
      setAppliedInternship(null);
      setApplied(false);
      alert('Your GPA does not meet the minimum requirements for this internship.');
      return;
    }

    setAppliedInternship(internship);
    setApplied(true);

    try {
      // Get current user data
      const currentUser = await axios.get(`https://server-7tfl.onrender.com/users/${user.id}`);
      const appliedInternships = currentUser.data.appliedInternships || []; // Fetch applied internships

      if (appliedInternships.includes(internship.id)) {
        alert('You have already applied for this internship.');
        return;
      }

      // Add current internship to applied internships
      const updatedInternships = [...appliedInternships, internship.id];

      // Update applied internships in the database
      await axios.put(`https://server-7tfl.onrender.com/users/${user.id}`, {
        appliedInternships: updatedInternships,
      });

      // Update localStorage
      const updatedUser = { ...user, appliedInternships: updatedInternships };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      console.log('Successfully applied for the internship!');
    } catch (error) {
      console.error('Error applying for internship:', error);
      alert('An error occurred while applying for the internship.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div>
      <CardContainer>
        {internships.map((internship) => (
          <Card key={internship.id}>
            <Title>{internship.title}</Title>
            <GPA>Minimum GPA: {internship.gpa}</GPA>

            <Button onClick={() => handleApply(internship)}>Apply</Button>
          </Card>
        ))}
      </CardContainer>

      {applied && appliedInternship && (
        <SuccessMessage>
          You have successfully applied for the {appliedInternship.title} internship!
        </SuccessMessage>
      )}
    </div>
  );
};
export default Internships;
