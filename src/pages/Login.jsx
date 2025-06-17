import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const formStyle = {
    background: "#ffffff",
    padding: "2.5rem",
    maxWidth: "450px",
    margin: "1.5rem auto",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1f2937",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#111827",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "1rem",
    padding: "0.8rem",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    ...inputStyle,
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      alert("Login successful");

      // Debugging console logs
      console.log("Full response:", res.data);
      console.log("User role:", res.data.user.role);
      console.log("Token:", res.data.token);

      if (res.data.user.role === "employer") {
        console.log("Redirecting to /post-job");
        navigate("/post-job"); // ✅ FIXED HERE
      } else {
        console.log("Redirecting to /jobs");
        navigate("/jobs");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={headingStyle}>Login</h2>
      <input
        style={inputStyle}
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        style={buttonStyle}
        type="submit"
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
