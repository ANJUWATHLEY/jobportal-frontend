import React, { useState } from "react";
import API from "../api";

const PostJob = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
  });

  const resetForm = () => {
    setForm({ title: "", description: "", company: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/jobs", form);
      alert(res.data.message);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        alert("Only HRs can post jobs");
      } else if (err.response && err.response.status === 401) {
        alert("Please login first to post jobs");
      } else {
        alert("Failed to post job");
      }
    } finally {
      // ✅ Form reset in both success and error case
      resetForm();
    }
  };

  const formStyle = {
    background: "#fff",
    padding: "2rem",
    maxWidth: "500px",
    margin: "3rem auto",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "1.2rem",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.9rem",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#1f2937" }}>
        Post Job
      </h2>
      <input
        style={inputStyle}
        placeholder="Job Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        style={inputStyle}
        placeholder="Company Name"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        required
      />
      <textarea
        style={textareaStyle}
        placeholder="Job Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
      >
        Post Job
      </button>
    </form>
  );
};

export default PostJob;
