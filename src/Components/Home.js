import React from "react";
import LoginPage from "./LoginPage";
import MyInfo from "./MyInfo";

export default function Home({
  currentUser,
  page,
  onForgotPasswordSubmit,
  onNewUserClick,
  onLoginSubmit,
  onUserNameChange,
  onPasswordChange,
  onIsUserNameAvailable,
  onAddUser
}) {
  const myInfo = <MyInfo currentUser={currentUser} />;
  const loginPage = (
    <LoginPage
      onUserNameChange={onUserNameChange}
      onPasswordChange={onPasswordChange}
      onLoginSubmit={onLoginSubmit}
      onForgotPasswordSubmit={onForgotPasswordSubmit}
      onNewUserClick={onNewUserClick}
      onIsUserNameAvailable={onIsUserNameAvailable}
      onAddUser={onAddUser}
    />
  );
  const pageToDisplay = currentUser ? myInfo : loginPage;
  return <div>Home Page {pageToDisplay}</div>;
}
