import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListing from "./components/JobListing";
// import ViewAllJobs from "./components/ViewAllJobs";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Navbar />
  //     <Hero
  //       title="React Jobs Pool"
  //       subtitle="Jobs that best fits your skills set!"
  //     />
  //     <HomeCards />
  //     <JobListing />
  //     <ViewAllJobs />
  //   </>
  // );
};

export default App;
