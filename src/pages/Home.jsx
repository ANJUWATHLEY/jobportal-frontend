import React, { useEffect, useState } from 'react';
import { jobsAPI } from '../api';

const Home = ({ user }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await jobsAPI.getJobs();
        setJobs(res.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to JobPortal</h1>
      <p style={styles.subtitle}>
        {user
          ? `Hello, ${user.name}! You are logged in as a ${user.role}.`
          : 'Please login or register to get started.'}
      </p>
      <h2 style={styles.heading}>Latest Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul style={styles.jobList}>
          {jobs.map((job) => (
            <li key={job._id} style={styles.jobCard}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Description:</strong> {job.description}</p>

              {user && user.role === 'candidate' && (
                <button
                  style={styles.button}
                  onClick={() => window.location.href = `/apply-job?jobId=${job._id}`}
                >
                  Apply
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f4f6f8'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#34495e'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  jobList: {
    listStyle: 'none',
    padding: 0,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Home;

