// src/pages/ViewSubmissions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch submissions from API
    axios.get('http://localhost:8080/application-form/')
      .then(response => setSubmissions(response.data))
      .catch(error => console.error('Error fetching submissions:', error));
  }, []);

  return (
    <div>
      <h2>View Submissions</h2>
      <ul>
        {submissions.map(submission => (
          <li key={submission._id}>
            {submission.firstName} {submission.lastName} - {submission.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSubmissions;
