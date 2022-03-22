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
  Bathroom,
  Roadmap,
  Community,
  Team, 
  Footer,
  Bottom
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
      <Line />
      <Roadmap />
      <Line />
      <Community />
      <Line />
      <Team />
      <Line />
      <Footer />
      <Bottom />
    </div>
  );
};

export default App;
