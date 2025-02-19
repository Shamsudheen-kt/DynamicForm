import React, { useState } from "react";

export default function Login({ submitLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     submitLogin(userName, password);
  //   };
  return (
    <div>
      <div>
        <label> User name </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label> Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => submitLogin(userName, password)}>Submit</button>
      </div>
    </div>
  );
}
