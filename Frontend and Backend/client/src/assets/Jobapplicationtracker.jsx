import React, { useState } from "react";
import "./JobFreelanceTracker.css";
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './chatbot'; 

const Jobapplicationtracker = () => {
  const [applications, setApplications] = useState([
    { id: 1, company: "Google", title: "Software Engineer", status: "Applied", deadline: "April 10" },
    { id: 2, company: "Amazon", title: "Data Analyst", status: "Interview Scheduled", deadline: "April 15" },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="tracker-container">
      <h2>Job Application Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.title}</td>
              <td>{app.status}</td>
              <td>{app.deadline}</td>
              <td>
                <button onClick={() => updateStatus(app.id, "Interview Scheduled")}>Schedule Interview</button>
                <button onClick={() => updateStatus(app.id, "Offer Received")}>Mark as Offer</button>
                <button onClick={() => updateStatus(app.id, "Rejected")}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobapplicationtracker;