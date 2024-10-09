import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const MainLayOut = ({ children }) => {
  const [auth] = useAuth();
  console.log("auth.token",auth.token);
  const navigate = useNavigate();
  useEffect(()=>{
    if (auth?.token) {
      navigate('/home')
    }
  },[])
  return (
    <>
      <Header />
      <main
        style={{
          background:
            "linear-gradient(45deg, rgb(244, 255, 251) 0%, rgb(245, 255, 250) 100%)",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayOut;
