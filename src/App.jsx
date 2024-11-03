import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="React Jobs Pool"
        subtitle="Jobs that best fits your skills set!"
      />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
