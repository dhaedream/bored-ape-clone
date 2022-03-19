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
  Club,
  Bathroom
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
      <Bathroom />
    </div>
  );
};

export default App;
