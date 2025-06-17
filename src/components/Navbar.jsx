import React from "react";

const Navbar = () => {
  const navStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
  };

  const logoStyle = {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    letterSpacing: "0.5px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "0.75rem 1.25rem",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    fontSize: "0.95rem",
    letterSpacing: "0.3px",
  };

  const linkHoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const NavLink = ({ to, children }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <a
        href={to}
        style={{
          ...linkStyle,
          ...(isHovered ? linkHoverStyle : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={logoStyle}>
        JobPortal
      </a>
      <div style={navLinksStyle}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/post-job">Post Job</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;