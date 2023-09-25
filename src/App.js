import UserInterFace from "./Components/UserInterFace";
import "./App.css";
import React, { useState } from "react";
import UserDetails from "./Components/UserDetails";

const App = () => {
  const [EnterdUsers, SetUsers] = useState([]);

  const ChangingUsers = (Uname,Uage) => {
    SetUsers((previosUsers) => {
      return [...previosUsers, {name:Uname, age:Uage,id: Math.random.toString()} ];
    });
  };

  return (
    <div>
      <UserInterFace onChangeUsers={ChangingUsers}></UserInterFace>
      <UserDetails users={EnterdUsers}></UserDetails>
    </div>
  );
};

export default App;
