import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../App.css";
import Header from "./Header";
import Content from "./Content";

const USERS_API = "http://localhost:3000/users";
const VACATIONS_API = "http://localhost:3000/vacations";

function App() {
  const [page, setPage] = useState("/");
  const [xyz, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allVacations, setAllVacations] = useState([]);

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log(allUsers);
    let currentUserName = event.target.userName.value;
    let currentPassword = event.target.password.value;
    console.log(event.target.password.value);
    let foundUserWithPassword = allUsers.find(
      (user) =>
        user.userName === currentUserName && user.password === currentPassword
    );
    let foundUser = allUsers.find((user) => user.userName === currentUserName);
    foundUserWithPassword
      ? setCurrentUser(foundUserWithPassword)
      : foundUser
      ? alert("Wrong Password. Please Try Again or click forgot password.")
      : alert("Username not found. Please Try Again or click new user button.");
    //let currentUser;
    //setUser(currentUser);
    console.log(xyz);
  }

  function handleForgotPasswordClick() {}

  function handleNewUserClick() {}

  function loadUsers() {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((users) => setAllUsers(users))
      .catch((err) => console.log(err));
  }

  function loadVacations() {
    fetch(VACATIONS_API)
      .then((res) => res.json())
      .then((vacations) => setAllVacations(vacations))
      .catch((err) => console.log(err));
  }

  useEffect(loadUsers, []);
  useEffect(loadVacations, []);

  return (
    <div className="App">
      <Header></Header>
      <NavBar onChangePage={setPage} />
      <Content 
        currentUser={xyz} 
        page={page} 
        onLoginSubmit={handleLoginSubmit}
        onForgotPasswordClick={handleForgotPasswordClick}
        onNewUserClick={handleNewUserClick}
      />
    </div>
  )
}

export default App;
