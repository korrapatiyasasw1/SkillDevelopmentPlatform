import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer/>
    </>
  );    
}
export default MainLayout;