import React from "react";
import LoginPage from "./LoginPage";
import MyInfo from "./MyInfo";

export default function Home({
  currentUser,
  page,
  onForgotPasswordClick,
  onNewUserClick,
  onLoginSubmit,
  onUserNameChange,
  onPasswordChange
}) {
  const myInfo = <MyInfo currentUser={currentUser} />;
  const loginPage = (
    <LoginPage
      onUserNameChange={onUserNameChange}
      onPasswordChange={onPasswordChange}
      onLoginSubmit={onLoginSubmit}
      onForgotPasswordClick={onForgotPasswordClick}
      onNewUserClick={onNewUserClick}
    />
  );
  const pageToDisplay = currentUser ? myInfo : loginPage;
  return <div>Home Page {pageToDisplay}</div>;
}
