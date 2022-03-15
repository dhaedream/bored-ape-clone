import React from "react";
import "./App.css";
// import Welcome from "./containers/welcome/Welcome";
import { Navbar, Header } from "./components/index.js";
export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Welcome /> */}
    </div>
  );
};

export default App;
