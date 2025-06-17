import React, { useState } from "react";
import API from "../api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });

  const formStyle = {
    background: "#ffffff",
    padding: "2.5rem",
    maxWidth: "450px",
    margin: "1.5rem auto", // reduced top gap
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1f2937",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#111827",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "1.2rem",
    padding: "0.8rem",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.9rem",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      alert(res.data.message);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={headingStyle}>Create Your Account</h2>
      <input
        style={inputStyle}
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        style={inputStyle}
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        style={inputStyle}
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select
        style={inputStyle}
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="jobseeker">Job Seeker</option>
        <option value="employer">Employer</option>
      </select>
      <button style={buttonStyle} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
