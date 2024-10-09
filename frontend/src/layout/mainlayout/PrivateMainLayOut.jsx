import React, { Fragment, useEffect, useState } from "react";
import HomeHeader from "../HomeHeader";
import { useExistUserAndCompany } from "../../Context/UserAndCompany";
import { useLocation, useNavigate } from "react-router-dom";
import { GetRequest } from "../../api-handler/apihandler";

const PrivateMainLayOut = ({ children }) => {
  const [userAndCompanyFind, setUserAndCompanyFind] = useExistUserAndCompany();
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("authusercompany");
  const existe = JSON.parse(auth);
  const { pathname } = useLocation();  
  useEffect(() => {
    if (pathname === "/home" && auth?.token) {
      navigate("/home");
    }
    if (existe?.token===null||existe?.token===undefined||existe?.token==='') {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  console.log("existe?.token",existe);


  const getExistUser = async () => {
    const response = await GetRequest("/api/auth/getsingle/data", {
      headers: {
        "content-type": "application/json",
        Authorization: existe?.token,
      },
    });
    if (response) {
      console.log("response", response);
      setUserAndCompanyFind(response.data);
    } else {
    }
  };
  useEffect(() => {
    getExistUser();
  }, []);
  return (
    <Fragment>
      <HomeHeader/>
      {children}
    </Fragment>
  );
};

export default PrivateMainLayOut;
