import React, { useState, useEffect } from 'react';
import './findjob.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindWork = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError('');
        axios.get('http://localhost:3001/api/jobs/all')
            .then(response => {
                setJobs(response.data);
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
                            <li className="nav-item"><a href="#" className="nav-link">Find Work</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="jobs-section">
                    <div className="jobs-container">
                        <h2 className="jobs-title">Available Jobs</h2>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {loading ? (
                            <p>Loading jobs...</p>
                        ) : (
                            <div className="jobs-list">
                                {jobs.length > 0 ? (
                                    jobs.map((job) => (
                                        <div className="job-card" key={job._id}>
                                            <h3 className="job-title">{job.Jobtitle}</h3>
                                            <Link to={`/job/${job.id}`}>View Details</Link>
                                            <p className="job-details">Fixed-price - Budget: {job.Budget}</p>
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
                    <p className="footer-text">&copy; 2024 ProCollabHub. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default FindWork;