// // import React, { useState, useEffect } from 'react';

// // function AdminDashBoard() {
// //   const [user, setUser] = useState(null); // State to hold the user details
// //   const [msg, setMsg] = useState(''); // State for the message input field

// //   useEffect(() => {
// //     // Get user details from localStorage
// //     const storedUser = axios.get('https://server-7tfl.onrender.com/users');

// //     if (storedUser) {
// //       setUser(storedUser);
// //        // Set user details to state
// //     }
// //   }, []); // Only run once when the component mounts

// //   const handlemsgChange = (e) => {
// //     setMsg(e.target.value); // Update msg state with input value
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Ensure user data is up-to-date with the new msg field
// //     const updatedUser = {
// //       ...user,
// //       msg, // Add the msg field to the user data
// //     };

// //     // Update user in localStorage
// //     localStorage.setItem('user', JSON.stringify(updatedUser));

// //     // Send updated user details to the server
// //     try {
// //       const response = await fetch('https://server-7tfl.onrender.com/users', {
// //         method: 'PUT', // You might need to use PUT or PATCH depending on your API setup
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(updatedUser),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Failed to update user details');
// //       }

// //       const result = await response.json();
// //       console.log('User updated successfully', result);
// //     } catch (error) {
// //       console.error('Error updating user:', error);
// //     }
// //   };

// //   if (!user) {
// //     return <div>Loading...</div>; 
// //     // Show loading if the user is not found yet
// //   }

// //   // Extract user details
// //   const { firstName, lastName, username,
// //      appliedInternships, backlog, educationBackground, email,
// //       gpa10, gpa12, workExperience, skills, num } = user;

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Admin Dashboard</h1>

// //       {/* Display User Details */}
// //       <section>
// //         <h2>User Details</h2>
// //         <p><strong>First Name:</strong> {firstName}</p>
// //         <p><strong>Last Name:</strong> {lastName}</p>
// //         <p><strong>Username:</strong> {username}</p>
// //         <p><strong>Email:</strong> {email}</p>
// //         <p><strong>Phone Number:</strong> {num}</p>
// //         <p><strong>Education:</strong> {educationBackground}</p>
// //         <p><strong>10th GPA:</strong> {gpa10}</p>
// //         <p><strong>12th GPA:</strong> {gpa12}</p>
// //         <p><strong>Work Experience:</strong> {workExperience}</p>
// //         <p><strong>Backlog:</strong> {backlog}</p>
// //         <p><strong>Skills:</strong> {skills.join(', ')}</p>
// //       </section>

// //       <section>
// //         <h2>Applied Internships</h2>
// //         {appliedInternships && appliedInternships.length > 0 ? (
// //           <ul>
// //             {appliedInternships.map((internshipId) => (
// //               <li key={internshipId}>Internship ID: {internshipId}</li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No internships applied yet.</p>
// //         )}
// //       </section>

// //       {/* Form to send msg to user */}
// //       <section>
// //         <h2>Send Message to User</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div>
// //             <label>Message from Admin:</label>
// //             <input
// //               type="text"
// //               name="msg"
// //               value={msg}
// //               onChange={handlemsgChange}
// //               required
// //             />
// //           </div>
// //           <button type="submit">Send Message</button>
// //         </form>
// //       </section>
// //     </div>
// //   );
// // }

// // export default AdminDashBoard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AdminDashBoard() {
//   const [users, setUsers] = useState([]); // State to hold all user details
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Fetch all users data when the component mounts
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://server-7tfl.onrender.com/users');
//         setUsers(response.data); // Set users state with the fetched data
//         setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setLoading(false); // Stop loading on error
//       }
//     };

//     fetchUsers(); // Call the function to fetch users
//   }, []); // Empty array ensures this only runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while data is being fetched
//   }

//   // Render all user details
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>All Users Details</h1>

//       {users.length > 0 ? (
//         users.map((user) => (
//           <div key={user.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
//             <h3>User Details</h3>
//             <p><strong>Full Name:</strong> {user.fullName}</p>
//             <p><strong>Username:</strong> {user.username}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Phone Number:</strong> {user.num}</p>
//             <p><strong>Education:</strong> {user.educationBackground}</p>
//             <p><strong>10th GPA:</strong> {user.gpa10}</p>
//             <p><strong>12th GPA:</strong> {user.gpa12}</p>
//             <p><strong>Work Experience:</strong> {user.workExperience}</p>
//             <p><strong>Backlog:</strong> {user.backlog}</p>
//             <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
//             <p><strong>Applied Internships:</strong> {user.appliedInternships ? user.appliedInternships.join(', ') : 'No internships applied'}</p>
//           </div>
//         ))
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// }

// export default AdminDashBoard;

import React from 'react'

function AdminDashBoard() {
  return (
    <div>AdminDashBoard</div>
  )
}

export default AdminDashBoard