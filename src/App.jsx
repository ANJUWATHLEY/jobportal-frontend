// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import JobList from "./pages/JobList";
import PostJob from "./pages/PostJob";
import ApplyJob from "./pages/ApplyJob";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
};

export default App;
