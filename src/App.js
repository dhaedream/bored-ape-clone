import React from "react";
import "./App.css";
// import Welcome from "./containers/welcome/Welcome";
import {
  Navbar,
  Header,
  Welcome,
  Distribution,
  Cta,
  Line,
  Specs,
} from "./components/index.js";
export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <Distribution />
      <Cta />
      <Line />
      <Specs />
      <Line />
    </div>
  );
};

export default App;
