import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Welcome from "./containers/welcome/Welcome";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
    </div>
  );
};

export default App;
