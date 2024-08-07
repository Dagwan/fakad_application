// src/pages/LogoutPopup.js
import React from 'react';
import '../components/LogoutPopup.css';

const Logout = ({ onClose, onConfirm }) => {
  return (
    <div className="logout-popup-overlay">
      <div className="logout-popup">
        <h2>Logout</h2><hr></hr>
        <p>You are about to logout from your account. Are you sure?</p>
        <div className="logout-popup-buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
