import React from "react";
import "./App.css";
// import Welcome from "./containers/welcome/Welcome";
import { Navbar, Header, Welcome, Distribution } from "./components/index.js";
export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <Distribution />
    </div>
  );
};

export default App;
