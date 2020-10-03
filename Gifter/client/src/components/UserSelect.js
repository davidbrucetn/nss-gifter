import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { handleFieldChange } from "./PostForm";

const UserSelect = () => {
  const { users, getAllUsers } = useContext(UserContext);
  const [value, setValue] = React.useState("Select a User");

  const userSelect = users.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <select
      name="userProfileId"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {userSelect.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default UserSelect;
