import React, { useState, useEffect } from 'react';
import './hireexpert.css';
import { useNavigate, useParams } from 'react-router-dom';

const HireExpert = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const [formData, setFormData] = useState({
        Jobtitle: '',
        Jobdesc: '',
        ReqSkills: '',
        Budget: '',
        Date: '',
    });
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                jobId
                    ? `http://localhost:3001/api/jobs/update/${jobId}`
                    : 'http://localhost:3001/api/jobs/hireexpert',
                {
                    method: jobId ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                alert(jobId ? 'Job updated successfully!' : 'Job posted successfully!');
                fetchJobs();
                setFormData({ Jobtitle: '', Jobdesc: '', ReqSkills: '', Budget: '', Date: '' });
                navigate('/findjob');
            } else {
                const errorMessage = await response.text();
                alert('Failed to save job: ' + errorMessage);
            }
        } catch (error) {
            console.error('Error saving job:', error);
            alert('An error occurred while saving the job.');
        } finally {
            setLoading(false);
        }
    };

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3001/api/jobs/all');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setJobs([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchAppliedJobs = () => {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setAppliedJobs(appliedJobs);
    };

    useEffect(() => {
        if (jobId) fetchJobById(jobId);
        else fetchJobs();
        fetchAppliedJobs();
    }, [jobId]);

    const fetchJobById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/jobs/${id}`);
            const job = await response.json();
            setFormData(job);
        } catch (error) {
            console.error('Error fetching job by ID:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            try {
                const response = await fetch(`http://localhost:3001/api/jobs/delete/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert('Job deleted successfully');
                    setJobs(jobs.filter((job) => job._id !== id));
                } else {
                    const errorMessage = await response.text();
                    alert('Failed to delete job: ' + errorMessage);
                }
            } catch (error) {
                console.error('Error deleting job:', error);
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/hireexpert/${id}`);
    };

    return (
        <div>
            <div className="hero">
                <div className="form-container">
                    <h1>{jobId ? 'Update Your Job Posting' : 'Create Your Job Posting'}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Job Title"
                                name="Jobtitle"
                                value={formData.Jobtitle}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Job Description"
                                rows="4"
                                name="Jobdesc"
                                value={formData.Jobdesc}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Required Skills"
                                name="ReqSkills"
                                value={formData.ReqSkills}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Budget"
                                name="Budget"
                                value={formData.Budget}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="Date"
                                value={formData.Date}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" style={{ position:"initial" }} disabled={loading}>
                                {loading ? 'Loading...' : jobId ? 'Update Job' : 'Post a Job'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="jobs-list">
                <h2>Your Posted Jobs</h2>
                {loading ? (
                    <p>Loading jobs...</p>
                ) : jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div key={job._id} className="job-item">
                            <h3>{job.Jobtitle}</h3>
                            <p><strong>Description:</strong> {job.Jobdesc}</p>
                            <p><strong>Skills Required:</strong> {job.ReqSkills}</p>
                            <p><strong>Budget:</strong> ${job.Budget}</p>
                            <p>
                                <strong>Deadline:</strong>{' '}
                                {new Intl.DateTimeFormat('en-US').format(new Date(job.Date))}
                            </p>
                            <button
                                onClick={() => handleDelete(job._id)}
                                className="btn btn-danger"
                                style={{position:"initial"}}
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleUpdate(job._id)}
                                className="btn btn-warning"
                                style={{position:"initial"}}
                            >
                                Update
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No jobs available</p>
                )}
            </div>
            <h2 style={{textAlign:"center"}}>Applied Jobs</h2>
            <div className="applied-jobs">
                
                {appliedJobs.length === 0 ? (
                    <p>No applied jobs yet</p>
                ) : (
                    appliedJobs.map((job) => (
                        <div key={job._id} className="applied-job-item" style={{padding:"10px",boxShadow:"4px 4px 10px 2px rgba(0, 0, 0, 0.3)",marginRight:"10px",width:"300px"}}>
                            <h3>{job.Jobtitle}</h3>
                            <p>{job.Jobdesc}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HireExpert;
