// pages/JobList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/jobs")
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs", err);
        setJobs([]);
      });
  }, []);

  const handleApply = (id) => {
    navigate(`/apply/${id}`);
  };

  // ---------- Styles ----------
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "1rem",
      fontFamily: "'Segoe UI', sans-serif",
    },
    header: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "bold",
      margin: "3.5rem 0 2.5rem", // top margin increased to push it down from nav
      color: "#1f2937",
      borderBottom: "2px solid #e5e7eb",
      paddingBottom: "0.5rem",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "2rem",
      marginBottom: "2rem",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.07)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "0.5rem",
    },
    company: {
      fontWeight: "500",
      color: "#6b7280",
      marginBottom: "0.3rem",
    },
    description: {
      color: "#374151",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    applyButton: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    noJobs: {
      textAlign: "center",
      color: "#9ca3af",
      fontSize: "1.2rem",
      marginTop: "3rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Available Job Listings</h1>
      {Array.isArray(jobs) && jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.id || job._id}
            style={styles.card}
            onMouseOver={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover);
            }}
            onMouseOut={(e) => {
              Object.assign(e.currentTarget.style, styles.card);
            }}
          >
            <h3 style={styles.title}>{job.title}</h3>
            <p style={styles.company}>Company: {job.company}</p>
            <p style={styles.description}>{job.description}</p>
            <button
              style={styles.applyButton}
              onClick={() => handleApply(job.id || job._id)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              Apply Now
            </button>
          </div>
        ))
      ) : (
        <p style={styles.noJobs}>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
