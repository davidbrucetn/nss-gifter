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
      id="userProfileId"
      value={value}
      onChange={(e) => {
        setValue(e.currentTarget.value);
        console.log(e.currentTarget.value);
      }}
    >
      <option key="0" value="0">
        Search by User
      </option>
      {userSelect.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default UserSelect;
