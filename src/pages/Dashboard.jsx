import React from "react";

const Dashboard = () => {
  const stats = [
    { number: "1,247", label: "Total Jobs" },
    { number: "89", label: "New Today" },
    { number: "432", label: "Companies" },
  ];

  const jobs = [
    { title: "React Developer", company: "Google", emoji: "⚛️" },
    { title: "ML Engineer", company: "OpenAI", emoji: "🤖" },
    { title: "Blockchain Dev", company: "Coinbase", emoji: "⛓️" },
    { title: "Cloud Architect", company: "AWS", emoji: "☁️" },
    { title: "Cybersecurity Expert", company: "Microsoft", emoji: "🔒" },
    { title: "AI Researcher", company: "DeepMind", emoji: "🧠" },
    { title: "Kubernetes Dev", company: "Docker", emoji: "🐳" },
    { title: "GraphQL Dev", company: "Meta", emoji: "📡" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(135deg, rgba(102,126,234,0.85), rgba(118,75,162,0.85)),
          url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "2rem 1rem",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
          padding: "2rem 1.5rem",
          width: "95%",
          maxWidth: "500px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        {/* CSS Keyframe Animation */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-track {
              display: flex;
              animation: scroll 10s linear infinite;
              gap: 1rem;
            }
            .scroll-track:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.8rem",
            marginTop: "0",
          }}
        >
          Welcome to Job Portal
        </h1>

        <p style={{ 
          color: "#444", 
          fontSize: "1rem", 
          marginBottom: "1.2rem",
          margin: "0 0 1.2rem 0"
        }}>
          Explore top jobs and great companies hiring now!
        </p>

        {/* Scrolling Stats */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "1.2rem",
            background: "#f1f5ff",
            borderRadius: "10px",
            padding: "0.5rem",
          }}
        >
          <div className="scroll-track">
            {[...stats, ...stats].map((s, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "0.7rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid #d6dbf5",
                  minWidth: "140px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#667eea",
                    margin: "0",
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    marginTop: "0.2rem",
                    margin: "0.2rem 0 0 0",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Jobs */}
        <div>
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "0.6rem",
              margin: "0 0 0.6rem 0",
            }}
          >
            🔥 Latest Jobs
          </h2>

          <div
            style={{
              overflow: "hidden",
              background: "#f1f5ff",
              borderRadius: "10px",
              padding: "0.5rem",
            }}
          >
            <div className="scroll-track">
              {[...jobs, ...jobs].map((job, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    borderRadius: "8px",
                    padding: "0.6rem 0.8rem",
                    minWidth: "200px",
                    border: "1px solid #d6dbf5",
                    flexShrink: 0,
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{job.emoji}</span>
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        color: "#333",
                        margin: "0",
                      }}
                    >
                      {job.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#667eea",
                        marginTop: "0.1rem",
                        margin: "0.1rem 0 0 0",
                      }}
                    >
                      {job.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;