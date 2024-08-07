// src/pages/Dashboard.js
import React, { useState } from "react";
import { Nav, Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from "../components/Layout";
import '../components/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCog, faUser, faSignOutAlt, faFileAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from './BackToTop';

import ApplicationInfoPage from './ApplicationInfoPage';
import Apply from './Apply';
import Reports from './Reports';
import Settings from './Settings';
import LogoutPopup from './Logout';
import ViewSubmissions from './ViewSubmissions';
import ViewApplicationStatus from './ViewApplicationStatus';

const Dashboard = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = () => {
    // Clear user session data
    localStorage.removeItem('username');
    localStorage.removeItem('token'); // Token for authentication
    window.location.href = '/login'; // Redirect to login page
  };

  const handleClosePopup = () => {
    setShowLogoutPopup(false);
  };

  return (
    <Layout title="Dashboard - Fakad Infotech">
      <div className="dashboard-wrapper">
        <aside className="sidebar">
          <Nav defaultActiveKey="/dashboard/application-info-page" className="flex-column">
            <Nav.Link as={Link} to="/dashboard/application-info-page"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/apply"><FontAwesomeIcon icon={faUser} /> Apply</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/view-submissions"><FontAwesomeIcon icon={faFileAlt} /> View Submissions</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/view-application-status"><FontAwesomeIcon icon={faCheckCircle} /> View Application Status</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/reports"><FontAwesomeIcon icon={faChartBar} /> Reports</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/settings"><FontAwesomeIcon icon={faCog} /> Settings</Nav.Link>
            <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
          </Nav>
        </aside>
        <main className="content">
          <header className="dashboard-header">
            <span>Welcome, {localStorage.getItem('username')}!</span>
          </header>
          <Routes>
            <Route path="application-info-page" element={<ApplicationInfoPage />} />
            <Route path="apply" element={<Apply />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="view-submissions" element={<ViewSubmissions />} />
            <Route path="view-application-status" element={<ViewApplicationStatus />} />
            <Route path="/" element={<ApplicationInfoPage />} />
          </Routes>
        </main>
      </div>
      {showLogoutPopup && <LogoutPopup onClose={handleClosePopup} onConfirm={handleConfirmLogout} />}
      <BackToTopButton />
    </Layout>
  );
};

export default Dashboard;
