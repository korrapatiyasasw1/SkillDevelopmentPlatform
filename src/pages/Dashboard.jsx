// // // import React from 'react';
// // // import { NavLink,Outlet} from 'react-router-dom';
// // // import styled from 'styled-components';

// // // const DashboardWrapper = styled.div`
// // //   display: flex;
// // //   flex-direction: column;
// // //   min-height: 100vh;
// // //   background-color: #f4f4f4;
// // // `;

// // //   const Sidebar = styled.aside`
// // //   background-color: #343a40;
// // //   color: white;
// // //   width: 200px;
// // //   padding: 20px;
// // //   display: flex;
// // //   flex-direction: column;

// // //   ul {
// // //     list-style-type: none;
// // //     padding: 0;
// // //   }

// // //   li {
// // //     margin-bottom: 10px;
// // //   }

// // //   a {
// // //     color: white;
// // //     text-decoration: none;

// // //     &:hover {
// // //       text-decoration: underline;
// // //     }
// // //   }
// // // `;

// // // const MainContent = styled.main`
// // //   flex-grow: 1;
// // //   padding: 20px;
// // // `;

// // // const Stats = styled.div`
// // //   display: flex;
// // //   justify-content: space-around;
// // //   margin-bottom: 20px;

// // //   .stat-item {
// // //     text-align: center;
// // //     background-color: white;
// // //     padding: 15px;
// // //     border-radius: 5px;
// // //     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// // //     width: 30%;

// // //     h3 {
// // //       margin: 0 0 10px;
// // //     }
// // //   }
// // // `;

// // // const Section = styled.section`
// // //   background-color: white;
// // //   padding: 20px;
// // //   margin-bottom: 20px;
// // //   border-radius: 5px;
// // //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
// // //   h2
// // //    {
// // //     margin-bottom: 15px;
// // //   }

// // //   ul
// // //    {
// // //     padding-left: 20px;
// // //   }
// // // `;
// // // const Dashboard = () => {
// // //   return (
// // //     <DashboardWrapper>
     
// // //       <div style={{ display: 'flex' }}>
// // //         <Sidebar>
// // //           <ul>
// // //             <li><NavLink to="/dashboard">Overview</NavLink></li>
// // //             <li><NavLink to="/dashboard/internships">Applied Internships</NavLink></li>
// // //             <li><NavLink to="/dashboard/opportunities">Opportunities</NavLink></li>
// // //             <li><NavLink to="/dashboard/Home">Home</NavLink></li>
// // //             <li><NavLink to="/dashboard/messages">Messages</NavLink></li>
// // //             <li><NavLink to="/dashboard/internships">Internships</NavLink></li>
// // //             <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
// // //             {/* <li><NavLink to="/dashboard/Profile">Profile</NavLink></li> */}
// // //             <li><NavLink to="/dashboard/logout">Logout</NavLink></li>                
// // //      </ul>

// // //         </Sidebar>

// // //         <MainContent>
// // //           <div className="dashboard-overview">
// // //             <h2>Overview</h2>
// // //             <Stats>
// // //               <div className="stat-item">
// // //                 <h3>Total Internships Applied</h3>
// // //                 <p>45</p> {/* Example value */}
// // //               </div>
// // //               <div className="stat-item">
// // //                 <h3>Opportunities Available</h3>
// // //                 <p>30</p> {/* Example value */}
// // //               </div>
// // //               <div className="stat-item">
// // //                 <h3>Profile Completion</h3>
// // //                 <p>80% Complete</p> {/* Example value */}
// // //               </div>
// // //             </Stats>
// // //           </div>

// // //           <Section>
// // //             <h2>Internship Management</h2>
// // //             <ul>
// // //               <li>Internship 1 - Status: Accepted</li>
// // //               <li>Internship 2 - Status: Pending</li>
// // //               {/* Dynamic internship list */}
// // //             </ul>
// // //           </Section>

// // //           <Section>
// // //             <h2>Opportunities Feed</h2>
// // //             <ul>
// // //               <li>Frontend Developer Internship at XYZ Co.</li>
// // //               <li>Data Analyst Role at ABC Corp.</li>
// // //               {/* Dynamic list of opportunities */}
// // //             </ul>
// // //           </Section>

// // //           <Section>
// // //             <h2>Messages & Notifications</h2>
// // //             <ul>
// // //               <li>You have 3 new messages from employers.</li>
// // //               <li>2 interview invites received.</li>
// // //               {/* Dynamic messages */}
// // //             </ul>
// // //           </Section>
// // //         </MainContent>
// // //       </div>
      
// // //           </DashboardWrapper>
// // //   );
// // // };

// // // export default Dashboard;

// // import React, { useState } from 'react';
// // import { NavLink, useLocation } from 'react-router-dom';
// // import styled from 'styled-components';

// // // Styled Components
// // const DashboardWrapper = styled.div`
// //   display: flex;
// //   min-height: 100vh;
// //   background-color: #f4f4f4;
// // `;

// // const Sidebar = styled.aside`
// //   background-color: #343a40;
// //   color: white;
// //   width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
// //   overflow: hidden;
// //   transition: width 0.3s ease-in-out;

// //   ul {
// //     list-style-type: none;
// //     padding: 0;
// //   }

// //   li {
// //     margin-bottom: 10px;
// //   }

// //   a {
// //     color: white;
// //     text-decoration: none;

// //     &:hover {
// //       text-decoration: underline;
// //     }
// //   }
// // `;

// // const MainContent = styled.main`
// //   flex-grow: 1;
// //   padding: 20px;
// // `;

// // const Stats = styled.div`
// //   display: flex;
// //   justify-content: space-around;
// //   margin-bottom: 20px;

// //   .stat-item {
// //     text-align: center;
// //     background-color: white;
// //     padding: 15px;
// //     border-radius: 5px;
// //     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// //     width: 30%;

// //     h3 {
// //       margin: 0 0 10px;
// //     }
// //   }
// // `;

// // const Section = styled.section`
// //   background-color: white;
// //   padding: 20px;
// //   margin-bottom: 20px;
// //   border-radius: 5px;
// //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

// //   h2 {
// //     margin-bottom: 15px;
// //   }

// //   ul {
// //     padding-left: 20px;
// //   }
// // `;

// // const HamburgerIcon = styled.div`
// //   display: none;
// //   font-size: 24px;
// //   cursor: pointer;
// //   margin-right: 20px;

// //   @media (max-width: 768px) {
// //     display: block;
// //   }
// // `;

// // const Dashboard = () => {
// //   const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
// //   const location = useLocation();

// //   return (
// //     <DashboardWrapper>
// //       {/* Sidebar */}
// //       <Sidebar isOpen={isSidebarOpen}>
// //         <ul>
// //           <li>
// //             <NavLink to="/dashboard" exact>
// //               Overview
// //             </NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/internships">Applied Internships</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/opportunities">Opportunities</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/Home">Home</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/About">About</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/Internships">Skill Development</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/messages">Messages</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/settings">Settings</NavLink>
// //           </li>
// //           <li>
// //             {location.pathname === '/dashboard' && (
// //               <NavLink to="/dashboard/logout">Logout</NavLink>
// //             )}
// //           </li>
// //           <li>
// //             <NavLink to="/dashboard/profile">Profile</NavLink>
// //           </li>
// //         </ul>
// //       </Sidebar>

// //       {/* Main Content */}
// //       <MainContent>
// //         <HamburgerIcon onClick={() => setSidebarOpen(!isSidebarOpen)}>
// //           ☰
// //         </HamburgerIcon>
// //         <div className="dashboard-overview">
// //           <h2>Overview</h2>
// //           <Stats>
// //             <div className="stat-item">
// //               <h3>Total Internships Applied</h3>
// //               <p>45</p> {/* Example value */}
// //             </div>
// //             <div className="stat-item">
// //               <h3>Opportunities Available</h3>
// //               <p>30</p> {/* Example value */}
// //             </div>
// //             <div className="stat-item">
// //               <h3>Profile Completion</h3>
// //               <p>80% Complete</p> {/* Example value */}
// //             </div>
// //           </Stats>
// //         </div>

// //         <Section>
// //           <h2>Internship Management</h2>
// //           <ul>
// //             <li>Internship 1 - Status: Accepted</li>
// //             <li>Internship 2 - Status: Pending</li>
// //             {/* Dynamic internship list */}
// //           </ul>
// //         </Section>

// //         <Section>
// //           <h2>Opportunities Feed</h2>
// //           <ul>
// //             <li>Frontend Developer Internship at XYZ Co.</li>
// //             <li>Data Analyst Role at ABC Corp.</li>
// //             {/* Dynamic list of opportunities */}
// //           </ul>
// //         </Section>

// //         <Section>
// //           <h2>Messages & Notifications</h2>
// //           <ul>
// //             <li>You have 3 new messages from employers.</li>
// //             <li>2 interview invites received.</li>
// //             {/* Dynamic messages */}
// //           </ul>
// //         </Section>
// //       </MainContent>
// //     </DashboardWrapper>
// //   );
// // };

// // export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components
// const DashboardWrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background-color: #f4f4f4;
// `;

// const Sidebar = styled.aside`
//   background-color: #343a40;
//   color: white;
//   width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
//   overflow: hidden;
//   transition: width 0.3s ease-in-out;

//   ul {
//     list-style-type: none;
//     padding: 0;
//   }

//   li {
//     margin-bottom: 10px;
//   }

//   a {
//     color: white;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const MainContent = styled.main`
//   flex-grow: 1;
//   padding: 20px;
// `;

// const Stats = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-bottom: 20px;

//   .stat-item {
//     text-align: center;
//     background-color: white;
//     padding: 15px;
//     border-radius: 5px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     width: 30%;

//     h3 {
//       margin: 0 0 10px;
//     }
//   }
// `;

// const Section = styled.section`
//   background-color: white;
//   padding: 20px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   h2 {
//     margin-bottom: 15px;
//   }

//   ul {
//     padding-left: 20px;
//   }
// `;

// const HamburgerIcon = styled.div`
//   display: none;
//   font-size: 24px;
//   cursor: pointer;
//   margin-right: 20px;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
//   const [internships, setInternships] = useState([]);
//   const [appliedInternships, setAppliedInternships] = useState([]); // Track applied internships
//   const [user, setUser] = useState(null); // State to store the logged-in user data
//   const [loading, setLoading] = useState(true); // Loading state
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch internships data
//         const internshipsResponse = await fetch('https://server-7tfl.onrender.com/jobs');
//         const internshipsData = await internshipsResponse.json();
//         setInternships(internshipsData);

//         // Fetch user data
//         const userResponse = await fetch('https://server-7tfl.onrender.com/users');
//         const userData = await userResponse.json();
//         setUser(userData[0]); // Assuming user is the first object in the response array
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleApply = (internship) => {
//     // Check if the internship has already been applied
//     if (!appliedInternships.includes(internship.id)) {
//       setAppliedInternships([...appliedInternships, internship.id]); // Add the internship to the applied list
//     } else {
//       alert("You have already applied for this internship.");
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <DashboardWrapper>
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen}>
//         <ul>
//           <li>
//             <NavLink to="/dashboard" exact>
//               Overview
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/internships">Applied Internships</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/opportunities">Opportunities</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/Home">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/About">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/Internships">Skill Development</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/messages">Messages</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/settings">Settings</NavLink>
//           </li>
//           <li>
//             {location.pathname === '/dashboard' && (
//               <NavLink to="/dashboard/logout">Logout</NavLink>
//             )}
//           </li>
//           <li>
//             <NavLink to="/dashboard/profile">Profile</NavLink>
//           </li>
//         </ul>
//       </Sidebar>

//       {/* Main Content */}
//       <MainContent>
//         <HamburgerIcon onClick={() => setSidebarOpen(!isSidebarOpen)}>
//           ☰
//         </HamburgerIcon>
//         <div className="dashboard-overview">
//           <h2>Overview</h2>
//           <Stats>
//             <div className="stat-item">
//               <h3>Total Internships Applied</h3>
//               <p>{appliedInternships.length}</p> {/* Display count of applied internships */}
//             </div>
//             <div className="stat-item">
//               <h3>Opportunities Available</h3>
//               <p>{internships.length}</p> {/* Example value */}
//             </div>
//             <div className="stat-item">
//               <h3>Profile Completion</h3>
//               <p>80% Complete</p> {/* Example value */}
//             </div>
//           </Stats>
//         </div>

//         <Section>
//           <h2>Internship Management</h2>
//           <ul>
//             {internships.map((internship) => (
//               <li key={internship.id}>
//                 {internship.title}
//                 <button onClick={() => handleApply(internship)}>
//                   Apply
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </Section>

//         <Section>
//           <h2>Opportunities Feed</h2>
//           <ul>
//             {internships.map((internship) => (
//               <li key={internship.id}>
//                 {internship.title}
//               </li>
//             ))}
//           </ul>
//         </Section>

//         <Section>
//           <h2>Messages & Notifications</h2>
//           <ul>
//             <li>You have 3 new messages from employers.</li>
//             <li>2 interview invites received.</li>
//             {/* Dynamic messages */}
//           </ul>
//         </Section>
//       </MainContent>
//     </DashboardWrapper>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Sidebar = styled.aside`
  background-color: #343a40;
  color: white;
  width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  .stat-item {
    text-align: center;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 30%;

    h3 {
      margin: 0 0 10px;
    }
  }
`;

const Section = styled.section`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
  const [internships, setInternships] = useState([]);
  const [user, setUser] = useState(null); // State to store the logged-in user data
  const [loading, setLoading] = useState(true); // Loading state
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch internships data
        const internshipsResponse = await fetch('https://server-7tfl.onrender.com/jobs');
        const internshipsData = await internshipsResponse.json();
        setInternships(internshipsData);

        // Fetch user data (assuming user is already logged in and their data is in localStorage)
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        setUser(loggedUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get the applied internships count from localStorage (if user exists)
  const appliedInternshipsCount = user?.appliedInternships?.length || 0;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <DashboardWrapper>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen}>
        <ul>
          <li>
            <NavLink to="/dashboard" exact>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/internships">Applied Internships</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/opportunities">Opportunities</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/Internships">Skill Development</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/messages">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">Settings</NavLink>
          </li>
          <li>
            {location.pathname === '/dashboard' && (
              <NavLink to="/dashboard/logout">Logout</NavLink>
            )}
          </li>
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
        </ul>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <HamburgerIcon onClick={() => setSidebarOpen(!isSidebarOpen)}>
          ☰
        </HamburgerIcon>
        <div className="dashboard-overview">
          <h2>Overview</h2>
          <Stats>
            <div className="stat-item">
              <h3>Total Internships Applied</h3>
              <p>{appliedInternshipsCount}</p> {/* Display count of applied internships from localStorage */}
            </div>
            <div className="stat-item">
              <h3>Opportunities Available</h3>
              <p>{internships.length}</p> {/* Display total available internships */}
            </div>
            <div className="stat-item">
              <h3>Profile Completion</h3>
              <p>80% Complete</p> {/* Example value */}
            </div>
          </Stats>
        </div>

        <Section>
          <h2>Internship Management</h2>
          <ul>
            {internships.map((internship) => (
              <li key={internship.id}>
                {internship.title}
                {/* Apply button or any other interactions can go here */}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Opportunities Feed</h2>
          <ul>
            {internships.map((internship) => (
              <li key={internship.id}>
                {internship.title}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Messages & Notifications</h2>
          <ul>
            <li>You have 3 new messages from employers.</li>
            <li>2 interview invites received.</li>
            {/* Dynamic messages */}
          </ul>
        </Section>
      </MainContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
