import React from "react";
import "./App.css";
import {
  Navbar,
  Header,
  Welcome,
  Distribution,
  Cta,
  Line,
  Specs,
  Club
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
      <Club />
      <Line />
    </div>
  );
};

export default App;
