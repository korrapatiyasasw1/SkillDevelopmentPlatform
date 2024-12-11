import React from "react";
import Header from "../Components/Header";
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