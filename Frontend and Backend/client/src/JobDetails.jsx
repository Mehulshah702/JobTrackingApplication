import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details based on ID
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`YOUR_API_URL/jobs/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h2>{job.Jobtitle}</h2>
      <p>{job.Jobdesc}</p>
      <p><strong>Required Skills:</strong> {job.ReqSkills}</p>
      <p><strong>Budget:</strong> {job.Budget}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default JobDetails;
