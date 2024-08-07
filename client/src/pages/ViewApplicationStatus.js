// src/pages/ViewApplicationStatus.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewApplicationStatus = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch application status from API
    axios.get('http://localhost:8080/application-status/')
      .then(response => setStatus(response.data.status))
      .catch(error => console.error('Error fetching application status:', error));
  }, []);

  return (
    <div>
      <h2>View Application Status</h2>
      <p>Your application status is: {status}</p>
    </div>
  );
};

export default ViewApplicationStatus;
