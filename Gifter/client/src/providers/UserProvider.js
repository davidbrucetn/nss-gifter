import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    return fetch("/api/userprofile")
      .then((res) => res.json())
      .then(setUsers);
  };

  const addUser = (user) => {
    return fetch("/api/userprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <UserContext.Provider value={{ users, getAllUsers, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
