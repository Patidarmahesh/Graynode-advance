import React, { createContext, useContext } from "react";
import { useState } from "react";

const FindContextUserCompany = createContext();
const UserAndCompany = ({ children }) => {
  const [userAndCompanyFind, setUserAndCompanyFind] = useState([]);
  const [id, setId] = useState("");
  return (
    <FindContextUserCompany.Provider
      value={[
        userAndCompanyFind,
        setUserAndCompanyFind,
        id,
        setId,
      ]}
    >
      {children}
    </FindContextUserCompany.Provider>
  );
};

export const useExistUserAndCompany = () => useContext(FindContextUserCompany);

export default UserAndCompany;
