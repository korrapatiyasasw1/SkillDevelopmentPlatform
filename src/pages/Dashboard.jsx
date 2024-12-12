import React from 'react';
import { NavLink,Outlet} from 'react-router-dom';
import styled from 'styled-components';


// Styled Components
const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
`;


  const Sidebar = styled.aside`
  background-color: #343a40;
  color: white;
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;

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


const Dashboard = () => {
  return (
    <DashboardWrapper>
     
      <div style={{ display: 'flex' }}>
        <Sidebar>
          <ul>
            <li><NavLink to="/dashboard">Overview</NavLink></li>
            <li><NavLink to="/dashboard/internships">Applied Internships</NavLink></li>
            <li><NavLink to="/dashboard/opportunities">Opportunities</NavLink></li>
            <li><NavLink to="/dashboard/skills">Skill Development</NavLink></li>
            <li><NavLink to="/dashboard/messages">Messages</NavLink></li>
            <li><NavLink to="/dashboard/internships">Internships</NavLink></li>
            <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
            <li><NavLink to="/dashboard/Profile">Profile</NavLink></li>
            <li><NavLink to="/dashboard/logout">Logout</NavLink></li>                
     </ul>

        </Sidebar>

        <MainContent>
          <div className="dashboard-overview">
            <h2>Overview</h2>
            <Stats>
              <div className="stat-item">
                <h3>Total Internships Applied</h3>
                <p>45</p> {/* Example value */}
              </div>
              <div className="stat-item">
                <h3>Opportunities Available</h3>
                <p>30</p> {/* Example value */}
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
              <li>Internship 1 - Status: Accepted</li>
              <li>Internship 2 - Status: Pending</li>
              {/* Dynamic internship list */}
            </ul>
          </Section>

          <Section>
            <h2>Opportunities Feed</h2>
            <ul>
              <li>Frontend Developer Internship at XYZ Co.</li>
              <li>Data Analyst Role at ABC Corp.</li>
              {/* Dynamic list of opportunities */}
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
      </div>
      
          </DashboardWrapper>
  );
};

export default Dashboard;