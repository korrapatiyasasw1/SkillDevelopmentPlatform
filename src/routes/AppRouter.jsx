import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import Internships from "../pages/Internships";
function AppRouter() {
  const loggedUser = true;
  return (
    <>
    <div>
      <Router>
        {loggedUser && (
           <MainLayout>
           <Routes>
            <Route path = "/LandingPage" element = {<LandingPage/>}></Route>
             <Route path="/Dashboard/About" element={<About />} /> 
             <Route path="/Signup" element={<Signup />} /> 
             <Route path="/Login" element={<Login />} /> 
             <Route path="/Dashboard" element={<Dashboard />} /> 
              {/* <Route path="/Dashboard/Profile" element={<Profile />} />  */}
             <Route path="/Dashboard/Home" element={<Home />} />
             <Route path="/Dashboard/Internships" element={<Internships />} />


           </Routes>
           </MainLayout>
        )}  
      </Router>
    </div>
    </>
  );
}

 export default AppRouter;
