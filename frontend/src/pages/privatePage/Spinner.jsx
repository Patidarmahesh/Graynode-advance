import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from "../../Context/AuthContext";

export const Spinner = ({ path = "/login" }) => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [count, setCount] = useState(4);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate(`${path}`);
    return () => clearInterval(interval);
  }, [count, navigate, path]);
  return (
    <div
      style={{
        height: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="Text-center">Redirecting To You {count} {" "}</h1>
      <CircularProgress />
    </div>
  );
};
