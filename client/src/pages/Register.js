import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../components/Register.css";
import BackToTopButton from "./BackToTop";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaRegCalendarAlt } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        terms: false,
        privacy: false,
    });
    const [formErrors, setFormErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        const errors = {};
        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (formData.phone === undefined || !formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        }
        if (!formData.dob.trim()) {
            errors.dob = 'Date of Birth is required';
        } else {
            const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();
            if (age < 10) errors.dob = 'You must be at least 10 years old to register';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.gender.trim()) {
            errors.gender = 'Gender is required';
        }
        if (!formData.terms) {
            errors.terms = 'You must accept the terms';
        }
        if (!formData.privacy) {
            errors.privacy = 'You must accept the privacy policy';
        }

        if (Object.keys(errors).length === 0) {
            try {
                await axios.post('https://fakad-student-application.onrender.com/create-account/', {
                    fullName: formData.fullName,
                    username: formData.username,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    email: formData.email,
                    phone: formData.phone,
                    dob: formData.dob,
                    gender: formData.gender,
                    terms: formData.terms,
                    privacy: formData.privacy,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.JWT_SECRET}`, 
                      },
                    });
                  
                setSuccess(true);
                navigate('/create-account'); // Redirect to ceate account success page
            } catch (error) {
                console.error('Error creating account:', error);

                let errorMessage = 'Failed to create account. Please try again later.';
                if (error.response) {
                    // Check if the server responded with a status indicating a conflict
                    if (error.response.status === 409) {
                        errorMessage = 'An account with this email or username already exists. Please use a different email or username.';
                    } else if (error.response.status === 400) {
                        errorMessage = 'An account with this email or username already exists. Please use a different email or username.';
                    } else {
                        // Handle other statuses or generic errors
                        errorMessage = `Error ${error.response.status}: ${error.response.data.message || 'An unexpected error occurred.'}`;
                    }
                }

                setFormErrors({ apiError: errorMessage });
            }
        } else {
            setFormErrors(errors);
        }
    };

    return (
<Layout title="Create Account - Fakad Infotech">
    <div className="register-container">
        <div className="register-box">
            <h1>Create Account</h1>
            <p>
                Welcome to the registration page! Before you create your account, please make sure you provide accurate and complete information. Your email address must be unique as it will be used for all communications and account recovery. Choose a strong password to ensure your account's security, and remember to confirm your password accurately. Ensure that your date of birth and gender are correctly entered, as this information helps us tailor our services to your needs. You must also agree to our <a href="/terms-and-conditions" target="blank">terms and conditions</a> and <a href="/privacy-policy" target="blank">privacy policy</a> before proceeding. If you encounter any issues or have questions, please contact our support team for assistance. Thank you for choosing Fakad Infotech!
            </p>
            <hr />

            <form onSubmit={handleSubmit} className="create-account-form">
                <div className="form-group">
                    <label htmlFor="fullName">
                        <FaUser /> Full Name: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={formErrors.fullName ? 'error' : ''}
                        required
                    />
                    {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="username">
                        <FaUser /> Username: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={formErrors.username ? 'error' : ''}
                        required
                    />
                    {formErrors.username && <span className="error-message">{formErrors.username}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <FaEnvelope /> Email: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                        required
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        <FaPhone /> Phone:
                    </label>
                    <PhoneInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        defaultCountry="NG" // Set default country code
                        className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <FaLock /> Password: <span className="required-asterisk">*</span>
                    </label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={formErrors.password ? 'error' : ''}
                            required
                        />
                        <button type="button" onClick={handlePasswordVisibility}>
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>
                    {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">
                        <FaLock /> Confirm Password: <span className="required-asterisk">*</span>
                    </label>
                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={formErrors.confirmPassword ? 'error' : ''}
                            required
                        />
                        <button type="button" onClick={handleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>
                    {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="dob">
                        <FaRegCalendarAlt /> Date of Birth: <span className="required-asterisk">*</span>
                    </label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={formErrors.dob ? 'error' : ''}
                        required
                    />
                    {formErrors.dob && <span className="error-message">{formErrors.dob}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="gender">
                        Gender: <span className="required-asterisk">*</span>
                    </label>
                    <select
                        type="sex"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={formErrors.gender ? 'error' : ''}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {formErrors.gender && <span className="error-message">{formErrors.gender}</span>}
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        I agree to the <a href="/terms-and-conditions"target="blank">terms and conditions</a> <span className="required-asterisk">*</span>
                    </label>
                    {formErrors.terms && <span className="error-message">{formErrors.terms}</span>}
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                        />
                        I agree to the <a href="/privacy-policy" target="blank">privacy policy</a> <span className="required-asterisk">*</span>
                    </label>
                    {formErrors.privacy && <span className="error-message">{formErrors.privacy}</span>}
                </div>
                {formErrors.apiError && <span className="error-message api-error">{formErrors.apiError}</span>}
                <button type="submit" className="submit-button">Create Account</button>
                {success && <div className="success-message">Account created successfully!</div>}
            </form>
            <div className="options">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    </div>
    <BackToTopButton />
</Layout>
    )
};

export default CreateAccount;
