import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaUser, FaChartBar, FaProjectDiagram, FaCog, FaBriefcase, FaSearch, FaPlusCircle, FaFolderOpen } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions if needed (e.g., clearing tokens, user data)
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => navigate('/Profile')} style={{ cursor: "pointer" }}>
            <FaUser /> Profile</li>
          <li onClick={() => navigate('/hireexpert')} style={{ cursor: "pointer" }}>
              <FaBriefcase /> Post Jobs
          </li>

          <li onClick={() => navigate('/findjob')} style={{ cursor: "pointer" }}>
              <FaSearch /> Find Jobs
          </li>

          <li onClick={() => navigate('/postproject')} style={{ cursor: "pointer" }}>
              <FaPlusCircle /> Post Projects
          </li>

          <li onClick={() => navigate('/freelanceMarketplace')} style={{ cursor: "pointer" }}>
              <FaFolderOpen /> Find Projects
          </li>
          <li onClick={() => navigate('/paymentpage')} style={{ cursor: "pointer" }}>
              <FaFolderOpen /> Payment
          </li>
          <li><FaChartBar /> Analytics</li>
          <li><FaCog /> Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1 style={{color:"white"}}>Welcome, User</h1>
          <button className="btn" style={{position:"initial"}} onClick={handleLogout}>Logout</button>
        </header>

        {/* Dashboard Blocks */}
        <section className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Earnings</h3>
            <p style={{color:"white"}}>$5,980</p>
          </div>
          <div className="dashboard-card">
            <h3>Active Projects</h3>
            <p style={{color:"white"}}>12</p>
          </div>
          <div className="dashboard-card">
            <h3>Pending Tasks</h3>
            <p style={{color:"white"}}>8</p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="projects-overview">
          <h2>Projects Overview</h2>
          <div className="project">
            <span style={{color:"white"}}>UI Redesign</span>
            <span className="status in-progress">In Progress</span>
          </div>
          <div className="project">
            <span style={{color:"white"}}>Dashboard Analytics</span>
            <span className="status completed">Completed</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
