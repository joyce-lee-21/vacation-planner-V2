import React, { useState } from "react";
import NavBar from "./NavBar";
import "../App.css";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [page, setPage] = useState("/");
  return (
    // Should these routes be kebab-case?
    <div className="App">
      <Header></Header>
      <NavBar onChangePage={setPage} />
      <Content />
    </div>
  );
}

export default App;
