import React, { useState } from "react";
import Layout from "../components/Layout";
import '../components/Login.css';
import BackToTopButton from './BackToTop';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let errors = {};
  
    form.querySelectorAll("[required]").forEach((input) => {
      if (!formData.get(input.name)) {
        errors[input.name] = `${input.placeholder} is required`;
      }
    });
  
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post('https://fakad-student-application.onrender.com/create-account/login', {
          username: formData.get('username'),
          password: formData.get('password'),
        });
  
        // Save token and username to local storage
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('username', formData.get('username'));
  
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ ...errors, form: 'Invalid username or password' });
      } finally {
        setLoading(false);
      }
    }
  };
  

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleResetPassword = () => {
    setShowResetPassword(true);
  };

  return (
    <Layout title="Login - Fakad Infotech">
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1><hr></hr>
          <p>The login page allows users to securely access their accounts by entering a username and password. It features an option to toggle password visibility and provides error messages for validation issues. Users can also navigate to account creation or password reset options.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
              />
              {errors["username"] && <span className="error">{errors["username"]}</span>}
            </div>
            <div className="input-container">
              <input
                type={passwordType}
                placeholder="Password"
                name="password"
                required
              />
              <FontAwesomeIcon
                icon={passwordType === "password" ? faEye : faEyeSlash}
                className="toggle-icon"
                onClick={togglePasswordVisibility}
              />
              {errors["password"] && <span className="error">{errors["password"]}</span>}
            </div>
            {errors["form"] && <div className="form-error">{errors["form"]}</div>}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="options">
            <p>Don't have an account? <a href="/register">Create account</a></p>
            <p>Forgot your password? <a href="#" onClick={handleForgotPassword}>Forgot password</a></p>
          </div>
        </div>
      </div>
      {showForgotPassword && <ForgotPasswordPopup onClose={() => setShowForgotPassword(false)} onResetPassword={handleResetPassword} />}
      {showResetPassword && <ResetPasswordPopup onClose={() => setShowResetPassword(false)} />}
      <BackToTopButton />
    </Layout>
  );
}

const ForgotPasswordPopup = ({ onClose, onResetPassword }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fakad-student-application.onrender.com/create-account/forgot-password', { email });
      setMessage(`A token has been sent to your email: ${email}, please check and use it to reset your password.`);
      setTimeout(() => {
        onClose();
        onResetPassword();
      }, 7000); // 7 seconds delay
    } catch (error) {
      setMessage('Error sending reset email.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Forgot Password</h2><hr></hr>
        <p>
          This popup allows users to reset their password by sending a reset token to their registered email address. Enter your email in the field provided and click 'Send Reset Link' to receive instructions on how to reset your password. Please note that the token will expire in 30 minutes for security reasons. If you decide not to proceed, you can close the popup using the 'Close' button.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <button type="submit">Send Reset Link</button>
          <button type="button" onClick={onClose}>Close</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

const ResetPasswordPopup = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://fakad-student-application.onrender.com/create-account/reset-password/${token}`, {
        password,
        confirmPassword,
      });
      setMessage('Password reset successfully.');
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Reset Password</h2><hr></hr>
        <p>This popup allows users to reset their password. First, enter the token sent to your email to verify your request. Next, set a new password and confirm it by entering it again. If you wish to cancel the process, you can close the popup using the 'Close' button. Once all fields are filled out, click 'Reset Password' to finalize the change.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter the token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faKey} className="icon" />
          </div>
          <div className="input-container">
            <input
              type={passwordType}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <FontAwesomeIcon
              icon={passwordType === "password" ? faEye : faEyeSlash}
              className="toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input-container">
            <input
              type={passwordType}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <FontAwesomeIcon
              icon={passwordType === "password" ? faEye : faEyeSlash}
              className="toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit">Reset Password</button>
          <button type="button" onClick={onClose}>Close</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
