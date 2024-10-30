import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="React Jobs Pool"
        subtitle="Jobs that best fits your skills set!"
      />
      <HomeCards />
    </>
  );
};

export default App;
