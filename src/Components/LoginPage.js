import React, { useState } from "react";

export default function LoginPage({
  onForgotPasswordClick,
  onNewUserClick,
  onLoginSubmit
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onLoginSubmit}>
        <div>User Name</div>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
        <div>Password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onForgotPasswordClick}>Forgot Password?</button>
      <button onClick={onNewUserClick}>New User</button>
    </div>
  );
}
