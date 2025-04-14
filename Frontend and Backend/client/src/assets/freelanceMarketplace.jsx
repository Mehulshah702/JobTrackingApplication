import React from "react";
import "./FreelanceMarketplace.css";

const FreelanceMarketplace = () => {
  return (
    <>
    <header>
        <div className="header-container">
            <h1 className="logo-title">ProCollabHub</h1>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/Dash" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/findwork" className="nav-link">Find Work</a></li>
                    <li className="nav-item"><a href="/freelancemarketplace" className="nav-link">Freelance marketplace</a></li>
                    <li className="nav-item"><a href="/DeliverTask" className="nav-link">Deliver Work</a></li>
                    <li className="nav-item"><a href="/managefinance" className="nav-link">Manage Finances</a></li>
                    <li className="nav-item"><a href="/messagepage" className="nav-link">Messages</a></li>
                    <li className="nav-item nav-dropdown">
                        <a href="#" className="dropdown-toggle nav-link">Account</a>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><a href="/Profile" className="dropdown-link">Profile</a></li>
                            <li className="dropdown-item"><a href="/paymentpage" className="dropdown-link">Payment</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link">Account Settings</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div className="hero-section1">
      {/* Left Content */}
      <div className="hero-content">
        <h1>The Easiest Way to Get Your New Job</h1>
        <p>
          Work with talented people at the most affordable price to get the most
          out of your time and cost.
        </p>

        {/* Search Bar */}
        <div className="search-bar1">
          <input type="text" placeholder="Search for..." className="search-input" />
          <select className="category-dropdown">
            <option>Services</option>
            <option>Jobs</option>
            <option>Freelancers</option>
          </select>
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hero-image">
        <img src="/image1.png" alt="Freelancer working" />
      </div>
    </div>
    
    </>
  );
};

export default FreelanceMarketplace;
