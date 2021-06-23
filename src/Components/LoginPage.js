import React, { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import NewUserForm from "./NewUserForm";

export default function LoginPage({
  onForgotPasswordSubmit,
  onLoginSubmit,
  onIsUserNameAvailable,
  onAddUser
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordForm, toggleForgotPasswordForm] = useState(false);
  const [newUserForm, toggleNewUserForm] = useState(false);

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleForgotPasswordClick() {
    toggleForgotPasswordForm(!forgotPasswordForm);
  }

  function handleNewUserClick() {
    toggleNewUserForm(!newUserForm);
  }

  function hideNewUserForm() {
    toggleNewUserForm(false);
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
      <button onClick={handleForgotPasswordClick}>Forgot Password?</button>
      <button onClick={handleNewUserClick}>New User</button>
      {forgotPasswordForm && (
        <ForgotPasswordForm onForgotPasswordSubmit={onForgotPasswordSubmit} />
      )}
      {newUserForm && (
        <NewUserForm
          onIsUserNameAvailable={onIsUserNameAvailable}
          onAddUser={onAddUser}
          onHideNewUserForm={hideNewUserForm}
        />
      )}
    </div>
  );
}
