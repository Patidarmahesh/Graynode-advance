import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContextUserCompany = createContext();
const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState({
    userAndCompay: "null",
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("authusercompany");
    const parseData = JSON.parse(data)
    console.log("parseData",parseData);
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        userAndCompay: parseData.data,
        token:parseData.token,
      });
    }
  }, []);
  // console.log("nnn",auth.token);
  return (
    <AuthContextUserCompany.Provider value={[auth, setAuth]}>
      {children}
    </AuthContextUserCompany.Provider>
  );
};

export const useAuth = () => useContext(AuthContextUserCompany);

export default AuthContext;
