import React, { useState } from "react";
import Login from "./login.js";

export default function LoginParent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userList = [
    { id: 1, name: "shamz", password: "123" },
    { id: 2, name: "bilal", password: "124" },
  ];
  const clickLogin = (userName, password) => {
    if (
      userList.find((obj) => obj.name === userName && obj.password === password)
    ) {
      setIsLoggedIn(true);
    }
  };
  return !isLoggedIn ? (
    <Login submitLogin={clickLogin} />
  ) : (
    <div>Dashboard</div>
  );
}
