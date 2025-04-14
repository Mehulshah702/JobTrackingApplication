import React, { useState, useEffect } from 'react';
import './findjob.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BudgetFilter = () => {
    const [budget, setBudget] = useState(100000);

    return (
        <div>
            <label htmlFor="budget" className="filter-label">
                Budget: <span className="budget-value">{budget}</span>
            </label>
            <input
                type="range"
                id="budget"
                className="budget-slider"
                min="100"
                max="100000"
                step="10"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
            />
        </div>
    );
};

const FindJob = () => {
    const [loading, setLoading] = useState(true);
    const [findjob, setJob] = useState([]);
    const [error, setError] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError('');
        axios.get('http://localhost:3001/api/jobs/all')
            .then(response => {
                setJob(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError('Error fetching jobs: ' + err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const storedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setAppliedJobs(storedAppliedJobs);
    }, []);

    const handleApply = (job) => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        if (!appliedJobs.some(appliedJob => appliedJob._id === job._id)) {
            appliedJobs.push(job);
            localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
            setAppliedJobs(appliedJobs);
            alert('Applied for the job successfully!');
        } else {
            alert('You have already applied for this job!');
        }
    };

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

            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <h2 className="hero-title">Find the Perfect Job or Freelancer</h2>
                        <div className="search-bar">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for jobs or freelancers"
                            />
                            <button className="search-button">Search</button>
                        </div>
                        <div className="filter-options">
                            <label htmlFor="category" className="filter-label">Category:</label>
                            <select id="category" className="category-select">
                                <option value="all">All</option>
                                <option value="web-development">Web Development</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="writing">Writing</option>
                            </select>

                            {/* Budget Filter Component */}
                            <BudgetFilter />
                        </div>
                    </div>
                </section>

                <section className="featured-jobs-section">
                    <div className="featured-jobs-container">
                        <h2 className="featured-jobs-title">Featured Jobs</h2>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {loading ? (
                            <p>Loading jobs...</p>
                        ) : (
                            <div className="jobs-carousel">
                                {findjob.length > 0 ? (
                                    findjob.map((job) => (
                                        <div className="job-card" key={job._id}>
                                            <h3 className="job-title">{job.Jobtitle}</h3>
                                            <Link to={`/job/${job.id}`}>View Details</Link>
                                            <p className="job-details">Fixed-price - Entry level - Est. Budget: {job.Budget}</p>
                                            <p className="job-description">{job.Jobdesc}</p>
                                            
                                            <button className="apply-btn" onClick={() => handleApply(job)}>
                                                Apply Now
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p>No jobs found.</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-container">
                    <p className="footer-text">&copy; 2025 ProCollab Hub. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default FindJob;
