import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Signup from "../pages/Signup";

function AppRouter() {
  const loggedUser = true;
  return (
    <>
    <div>
      <Router>
        {loggedUser && (
           <MainLayout>
           <Routes>
             <Route index element={<Home />} />
             <Route path="/Signup" element={<Signup />} /> 
           </Routes>
           </MainLayout>

        )}
       
         
      </Router>
    </div>
    </>
  );
}

export default AppRouter;