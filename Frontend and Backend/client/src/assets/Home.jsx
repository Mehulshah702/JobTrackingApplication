import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './basic.css';
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './chatbot'; // Import the Chatbot component

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility
  const navigate = useNavigate(); // Initialize navigate function

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      <div className="container1">
        <nav className="container-main">
          <div className="navbar-content">
            <div className="img">
              <a tabIndex="0" aria-live="assertive" className="ButtonElement" href="/" target="_self">
                <fl-logo>
                  <picture>
                    <div className="logo">
                      ProCollabHub
                    </div>
                  </picture>
                </fl-logo>
              </a>
            </div>
            <div className="nav-links">
              <a href="/register">Job Seekers</a>
              <a href="/register">Client</a>
              <a href="/register">Freelancers</a>
            </div>
            <div className="search-bar">
              <select id="primary-service-dropdown" className="service-dropdown">
                <option value="">Select Category</option>
                <option value="development-it">Development and IT</option>
                <option value="ai-services">AI Services</option>
                <option value="graphics-design">Graphics and Design</option>
                <option value="writing-translation">Writing and Translation</option>
                <option value="sales-marketing">Sales and Marketing</option>
                <option value="finance">Finance</option>
                <option value="admin-support">Admin and Customer Support</option>
              </select>
            </div>
          </div>

          <div className="font-bold flex gap-4">
            <a href="/login" className="text-white text-xxl pr-2" style={{ marginRight: "20px" }}>Login</a>
            <a href="/register" className="text-white text-xl">Signup</a>
          </div>
        </nav>

        <div className="herosection">
          <div className="content1">
            <h1>Opportunities don't happen.<br />You create them.</h1>
            <h2>Seize the moment, take action, and shape your freelancing future.</h2>
            <button className="startbtn" onClick={() => navigate("/register")}>
              Get Started Now
            </button>
          </div>
        </div>

        {/* Chatbot SVG Icon positioned at the bottom-right corner */}
        <div onClick={toggleChatbot} style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
        }}>
          <svg
            id="Layer_1"
            className="chatbot"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 119.35"
            height={50}
            width={50}
          >
            <title>chatbot</title>
            <path d="M57.49,29.2V23.53a14.41,14.41,0,0,1-2-.93A12.18,12.18,0,0,1,50.44,7.5a12.39,12.39,0,0,1,2.64-3.95A12.21,12.21,0,0,1,57,.92,12,12,0,0,1,61.66,0,12.14,12.14,0,0,1,72.88,7.5a12.14,12.14,0,0,1,0,9.27,12.08,12.08,0,0,1-2.64,3.94l-.06.06a12.74,12.74,0,0,1-2.36,1.83,11.26,11.26,0,0,1-2,.93V29.2H94.3a15.47,15.47,0,0,1,15.42,15.43v2.29H115a7.93,7.93,0,0,1,7.9,7.91V73.2A7.93,7.93,0,0,1,115,81.11h-5.25v2.07A15.48,15.48,0,0,1,94.3,98.61H55.23L31.81,118.72a2.58,2.58,0,0,1-3.65-.29,2.63,2.63,0,0,1-.63-1.85l1.25-18h-.21A15.45,15.45,0,0,1,13.16,83.18V81.11H7.91A7.93,7.93,0,0,1,0,73.2V54.83a7.93,7.93,0,0,1,7.9-7.91h5.26v-2.3A15.45,15.45,0,0,1,28.57,29.2H57.49ZM82.74,47.32a9.36,9.36,0,1,1-9.36,9.36,9.36,9.36,0,0,1,9.36-9.36Zm-42.58,0a9.36,9.36,0,1,1-9.36,9.36,9.36,9.36,0,0,1,9.36-9.36Zm6.38,31.36a2.28,2.28,0,0,1-.38-.38,2.18,2.18,0,0,1-.52-1.36,2.21,2.21,0,0,1,.46-1.39,2.4,2.4,0,0,1,.39-.39,3.22,3.22,0,0,1,3.88.08A22.36,22.36,0,0,0,56,78.32a14.86,14.86,0,0,0,5.47,1A16.18,16.18,0,0,0,67,78.22,25.39,25.39,0,0,0,72.75,75a3.24,3.24,0,0,1,3.89.18,3,3,0,0,1,.37.41,2.22,2.22,0,0,1,.42,1.4,2.33,2.33,0,0,1-.58,1.35,2.29,2.29,0,0,1-.43.38,30.59,30.59,0,0,1-7.33,4,22.28,22.28,0,0,1-7.53,1.43A21.22,21.22,0,0,1,54,82.87a27.78,27.78,0,0,1-7.41-4.16l0,0ZM94.29,34.4H28.57A10.26,10.26,0,0,0,18.35,44.63V83.18A10.26,10.26,0,0,0,28.57,93.41h3.17a2.61,2.61,0,0,1,2.41,2.77l-1,14.58L52.45,94.15a2.56,2.56,0,0,1,1.83-.75h40a10.26,10.26,0,0,0,10.22-10.23V44.62A10.24,10.24,0,0,0,94.29,34.4Z" />
          </svg>
        </div>

        {/* Conditionally render the Chatbot component */}
        {showChatbot && <Chatbot />}
      </div>
    </>
  );
};

export default Home;
