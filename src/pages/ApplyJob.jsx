import React, { useState } from "react";
import API from "../api";
import { useParams } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams();
  const [resume, setResume] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/jobs/apply", {
        job_id: id,
        resume_link: resume,
      });
      alert(res.data.message);
      setResume(""); // ✅ Clear the field after success
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Please login first to apply for jobs"); // ✅ Custom message
      } else {
        alert("Failed to apply");
      }
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Apply for Job</h2>
        <input
          type="text"
          placeholder="Enter Resume Link"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
