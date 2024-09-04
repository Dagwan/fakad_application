import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Alert } from 'react-bootstrap';
import { FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import '../components/Apply.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    phoneNumber: '',
    email: '',
    contactAddress: '',
    occupation: '',
    placeOfBirth: '',
    stateOfOrigin: '',
    localGovtArea: '',
    homeTown: '',
    villageAddress: '',
    previousTraining: '',
    previousTrainingDetails: {
      trainingPlaceName: '',
      trainingAddress: '',
      trainingDuration: ''
    },
    choiceOfTrainingProgramme: '',
    passportPhotograph: null,
    guardian: {
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      maritalStatus: '',
      phoneNumber: '',
      email: '',
      contactAddress: '',
      occupation: '',
      placeOfBirth: '',
      stateOfOrigin: '',
      localGovtArea: '',
      homeTown: '',
      villageAddress: '',
      identificationType: '',
      identificationUpload: null,
      passportPhotograph: null
    },
    nextOfKin: {
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      maritalStatus: '',
      relationship: '',
      phoneNumber: '',
      email: '',
      contactAddress: '',
      occupation: '',
      placeOfBirth: '',
      stateOfOrigin: '',
      localGovtArea: '',
      homeTown: '',
      villageAddress: ''
    }
  });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Handle input change for simple fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle input change for nested fields
  const handleNestedInputChange = (e, section) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value
      }
    }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (file && file.size > 5 * 1024 * 1024) { // Check file size (5MB limit)
      setError('File size exceeds 5MB.');
      return;
    }

    if (file && !file.type.startsWith('image/')) { // Check file type (only images)
      setError('Only image files are allowed.');
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: file
    }));
  };

  
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Form validation
      const errors = {};
  
      // Student information validation
      if (!formData.firstName.trim()) {
          errors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
          errors.lastName = 'Last name is required';
      }
      if (!formData.gender.trim()) {
          errors.gender = 'Gender is required';
      }
      if (!formData.dateOfBirth.trim()) {
          errors.dateOfBirth = 'Date of birth is required';
      } else {
          const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
          if (age < 10) errors.dateOfBirth = 'You must be at least 10 years old';
      }
      if (!formData.maritalStatus.trim()) {
          errors.maritalStatus = 'Marital status is required';
      }
      if (!formData.phoneNumber.trim()) {
          errors.phoneNumber = 'Phone number is required';
      }
      if (!formData.email.trim()) {
          errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email address is invalid';
      }
      if (!formData.contactAddress.trim()) {
          errors.contactAddress = 'Contact address is required';
      }
      if (!formData.occupation.trim()) {
          errors.occupation = 'Occupation is required';
      }
      if (!formData.placeOfBirth.trim()) {
          errors.placeOfBirth = 'Place of birth is required';
      }
      if (!formData.stateOfOrigin.trim()) {
          errors.stateOfOrigin = 'State of origin is required';
      }
      if (!formData.localGovtArea.trim()) {
          errors.localGovtArea = 'Local government area is required';
      }
      if (!formData.homeTown.trim()) {
          errors.homeTown = 'Home town is required';
      }
      if (!formData.villageAddress.trim()) {
          errors.villageAddress = 'Village address is required';
      }
      if (!formData.previousTraining) {
          errors.previousTraining = 'Previous training status is required';
      }
      if (!formData.choiceOfTrainingProgramme.trim()) {
          errors.choiceOfTrainingProgramme = 'Choice of training programme is required';
      }
      if (!formData.passportPhotograph) {
          errors.passportPhotograph = 'Passport photograph is required';
      }
  
      // Previous Training Details validation
      if (formData.previousTraining === 'Yes') {
          if (!formData.previousTrainingDetails.trainingPlaceName.trim()) {
              errors['previousTrainingDetails.trainingPlaceName'] = 'Training place name is required';
          }
          if (!formData.previousTrainingDetails.trainingAddress.trim()) {
              errors['previousTrainingDetails.trainingAddress'] = 'Training address is required';
          }
          if (!formData.previousTrainingDetails.trainingDuration.trim()) {
              errors['previousTrainingDetails.trainingDuration'] = 'Training duration is required';
          }
      }
  
      // Guardian Information validation
      if (!formData.guardian.firstName.trim()) {
          errors['guardian.firstName'] = 'Guardian first name is required';
      }
      if (!formData.guardian.lastName.trim()) {
          errors['guardian.lastName'] = 'Guardian last name is required';
      }
      if (!formData.guardian.gender.trim()) {
          errors['guardian.gender'] = 'Guardian gender is required';
      }
      if (!formData.guardian.maritalStatus.trim()) {
          errors['guardian.maritalStatus'] = 'Guardian marital status is required';
      }
      if (!formData.guardian.phoneNumber.trim()) {
          errors['guardian.phoneNumber'] = 'Guardian phone number is required';
      }
      if (!formData.guardian.email.trim()) {
          errors['guardian.email'] = 'Guardian email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.guardian.email)) {
          errors['guardian.email'] = 'Guardian email address is invalid';
      }
      if (!formData.guardian.contactAddress.trim()) {
          errors['guardian.contactAddress'] = 'Guardian contact address is required';
      }
      if (!formData.guardian.occupation.trim()) {
          errors['guardian.occupation'] = 'Guardian occupation is required';
      }
      if (!formData.guardian.placeOfBirth.trim()) {
          errors['guardian.placeOfBirth'] = 'Guardian place of birth is required';
      }
      if (!formData.guardian.stateOfOrigin.trim()) {
          errors['guardian.stateOfOrigin'] = 'Guardian state of origin is required';
      }
      if (!formData.guardian.localGovtArea.trim()) {
          errors['guardian.localGovtArea'] = 'Guardian local government area is required';
      }
      if (!formData.guardian.homeTown.trim()) {
          errors['guardian.homeTown'] = 'Guardian home town is required';
      }
      if (!formData.guardian.villageAddress.trim()) {
          errors['guardian.villageAddress'] = 'Guardian village address is required';
      }
      if (!formData.guardian.identificationType.trim()) {
          errors['guardian.identificationType'] = 'Guardian identification type is required';
      }
      if (!formData.guardian.identificationUpload) {
          errors['guardian.identificationUpload'] = 'Guardian identification upload is required';
      }
      if (!formData.guardian.passportPhotograph) {
          errors['guardian.passportPhotograph'] = 'Guardian passport photograph is required';
      }
  
      // Next of Kin Information validation
      if (!formData.nextOfKin.firstName.trim()) {
          errors['nextOfKin.firstName'] = 'Next of kin first name is required';
      }
      if (!formData.nextOfKin.lastName.trim()) {
          errors['nextOfKin.lastName'] = 'Next of kin last name is required';
      }
      if (!formData.nextOfKin.gender.trim()) {
          errors['nextOfKin.gender'] = 'Next of kin gender is required';
      }
      if (!formData.nextOfKin.maritalStatus.trim()) {
          errors['nextOfKin.maritalStatus'] = 'Next of kin marital status is required';
      }
      if (!formData.nextOfKin.relationship.trim()) {
          errors['nextOfKin.relationship'] = 'Next of kin relationship is required';
      }
      if (!formData.nextOfKin.phoneNumber.trim()) {
          errors['nextOfKin.phoneNumber'] = 'Next of kin phone number is required';
      }
      if (!formData.nextOfKin.email.trim()) {
          errors['nextOfKin.email'] = 'Next of kin email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.nextOfKin.email)) {
          errors['nextOfKin.email'] = 'Next of kin email address is invalid';
      }
      if (!formData.nextOfKin.contactAddress.trim()) {
          errors['nextOfKin.contactAddress'] = 'Next of kin contact address is required';
      }
      if (!formData.nextOfKin.occupation.trim()) {
          errors['nextOfKin.occupation'] = 'Next of kin occupation is required';
      }
      if (!formData.nextOfKin.placeOfBirth.trim()) {
          errors['nextOfKin.placeOfBirth'] = 'Next of kin place of birth is required';
      }
      if (!formData.nextOfKin.stateOfOrigin.trim()) {
          errors['nextOfKin.stateOfOrigin'] = 'Next of kin state of origin is required';
      }
      if (!formData.nextOfKin.localGovtArea.trim()) {
          errors['nextOfKin.localGovtArea'] = 'Next of kin local government area is required';
      }
      if (!formData.nextOfKin.homeTown.trim()) {
          errors['nextOfKin.homeTown'] = 'Next of kin home town is required';
      }
      if (!formData.nextOfKin.villageAddress.trim()) {
          errors['nextOfKin.villageAddress'] = 'Next of kin village address is required';
      }
  
      if (Object.keys(errors).length === 0) {
          try {
              await axios.post('https://fakad-student-application.onrender.com/application-form/', {
                  // Student Data
                  firstName: formData.firstName,
                  middleName: formData.middleName,
                  lastName: formData.lastName,
                  gender: formData.gender,
                  dateOfBirth: formData.dateOfBirth,
                  maritalStatus: formData.maritalStatus,
                  phoneNumber: formData.phoneNumber,
                  email: formData.email,
                  contactAddress: formData.contactAddress,
                  occupation: formData.occupation,
                  placeOfBirth: formData.placeOfBirth,
                  stateOfOrigin: formData.stateOfOrigin,
                  localGovtArea: formData.localGovtArea,
                  homeTown: formData.homeTown,
                  villageAddress: formData.villageAddress,
                  previousTraining: formData.previousTraining,
                  previousTrainingDetails: formData.previousTraining === 'Yes' ? formData.previousTrainingDetails : undefined,
                  choiceOfTrainingProgramme: formData.choiceOfTrainingProgramme,
                  passportPhotograph: formData.passportPhotograph,
                  // Guardian Data
                  guardian: {
                      firstName: formData.guardian.firstName,
                      middleName: formData.guardian.middleName,
                      lastName: formData.guardian.lastName,
                      gender: formData.guardian.gender,
                      maritalStatus: formData.guardian.maritalStatus,
                      phoneNumber: formData.guardian.phoneNumber,
                      email: formData.guardian.email,
                      contactAddress: formData.guardian.contactAddress,
                      occupation: formData.guardian.occupation,
                      placeOfBirth: formData.guardian.placeOfBirth,
                      stateOfOrigin: formData.guardian.stateOfOrigin,
                      localGovtArea: formData.guardian.localGovtArea,
                      homeTown: formData.guardian.homeTown,
                      villageAddress: formData.guardian.villageAddress,
                      identificationType: formData.guardian.identificationType,
                      identificationUpload: formData.guardian.identificationUpload,
                      passportPhotograph: formData.guardian.passportPhotograph
                  },
                  // Next of Kin Data
                  nextOfKin: {
                      firstName: formData.nextOfKin.firstName,
                      middleName: formData.nextOfKin.middleName,
                      lastName: formData.nextOfKin.lastName,
                      gender: formData.nextOfKin.gender,
                      maritalStatus: formData.nextOfKin.maritalStatus,
                      relationship: formData.nextOfKin.relationship,
                      phoneNumber: formData.nextOfKin.phoneNumber,
                      email: formData.nextOfKin.email,
                      contactAddress: formData.nextOfKin.contactAddress,
                      occupation: formData.nextOfKin.occupation,
                      placeOfBirth: formData.nextOfKin.placeOfBirth,
                      stateOfOrigin: formData.nextOfKin.stateOfOrigin,
                      localGovtArea: formData.nextOfKin.localGovtArea,
                      homeTown: formData.nextOfKin.homeTown,
                      villageAddress: formData.nextOfKin.villageAddress
                  }
              });
              setSuccess(true);
              navigate('/dashboard/view-submissions'); // Redirect to view submisions page page
          } catch (error) {
              console.error('Error submitting application:', error);
  
              let errorMessage = 'Failed to submit application. Please try again later.';
              if (error.response) {
                  if (error.response.status === 409) {
                      errorMessage = 'A conflict occurred. Please check the details and try again.';
                  } else if (error.response.status === 400) {
                      errorMessage = 'There was an issue with the application. Please check the details and try again.';
                  } else {
                      errorMessage = `Error ${error.response.status}: ${error.response.data.message || 'An unexpected error occurred.'}`;
                  }
              }
  
              alert(errorMessage);
          }
      } else {
          setFormErrors(errors);
      }
  };

  // Handle modal display
  const handleConfirmSubmit = () => {
    setShowModal(false);
    handleSubmit();
  };

  const handleSubmitt = () => {
    setShowModal(true);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Card.Body>
            <h3>Student Information</h3><hr></hr><br></br>
            <Form.Group controlId="firstName">
              <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="middleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
              /><br></br>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="maritalStatus">
              <Form.Label>Marital Status <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="contactAddress">
              <Form.Label>Contact Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="contactAddress"
                value={formData.contactAddress}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="occupation">
              <Form.Label>Occupation <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="placeOfBirth">
              <Form.Label>Place of Birth <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="stateOfOrigin">
              <Form.Label>State of Origin <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="localGovtArea">
              <Form.Label>Local Government Area <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="localGovtArea"
                value={formData.localGovtArea}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="homeTown">
              <Form.Label>Home Town <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="homeTown"
                value={formData.homeTown}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="villageAddress">
              <Form.Label>Village Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="villageAddress"
                value={formData.villageAddress}
                onChange={handleInputChange}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="previousTraining">
              <Form.Label>Previous Training <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="previousTraining"
                value={formData.previousTraining}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control><br></br>
            </Form.Group>
            {formData.previousTraining === 'Yes' && (
              <>
                <Form.Group controlId="trainingPlaceName">
                  <Form.Label>Training Centre Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="trainingPlaceName"
                    value={formData.previousTrainingDetails.trainingPlaceName}
                    onChange={(e) => handleNestedInputChange(e, 'previousTrainingDetails')}
                  /><br></br>
                </Form.Group>
                <Form.Group controlId="trainingAddress">
                  <Form.Label>Training Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="trainingAddress"
                    value={formData.previousTrainingDetails.trainingAddress}
                    onChange={(e) => handleNestedInputChange(e, 'previousTrainingDetails')}
                  /><br></br>
                </Form.Group>
                <Form.Group controlId="trainingDuration">
                  <Form.Label>Training Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="trainingDuration"
                    value={formData.previousTrainingDetails.trainingDuration}
                    onChange={(e) => handleNestedInputChange(e, 'previousTrainingDetails')}
                  /><br></br>
                </Form.Group>
              </>
            )}
            <Form.Group controlId="choiceOfTrainingProgramme">
              <Form.Label>Choice of Training Programme <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="choiceOfTrainingProgramme"
                value={formData.choiceOfTrainingProgramme}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Advanced Diploma">Advanced Diploma</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="passportPhotograph">
              <Form.Label>Passport Photograph <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="file"
                name="passportPhotograph"
                onChange={(e) => handleFileChange(e, 'passportPhotograph')}
                required
              />
            </Form.Group>
          </Card.Body>
        );
      case 2:
        return (
          <Card.Body>
            <h3>Guardian Information</h3><hr></hr><br></br>
            <Form.Group controlId="guardianFirstName">
              <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.guardian.firstName}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.guardian.middleName}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianLastName">
              <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.guardian.lastName}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianGender">
              <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.guardian.gender}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="guardianMaritalStatus">
              <Form.Label>Marital Status <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="maritalStatus"
                value={formData.guardian.maritalStatus}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              >
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="guardianPhoneNumber">
              <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.guardian.phoneNumber}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianEmail">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.guardian.email}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianContactAddress">
              <Form.Label>Contact Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="contactAddress"
                value={formData.guardian.contactAddress}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianOccupation">
              <Form.Label>Occupation <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={formData.guardian.occupation}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianPlaceOfBirth">
              <Form.Label>Place of Birth <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="placeOfBirth"
                value={formData.guardian.placeOfBirth}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianStateOfOrigin">
              <Form.Label>State of Origin <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="stateOfOrigin"
                value={formData.guardian.stateOfOrigin}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianLocalGovtArea">
              <Form.Label>Local Government Area <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="localGovtArea"
                value={formData.guardian.localGovtArea}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianHomeTown">
              <Form.Label>Home Town <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="homeTown"
                value={formData.guardian.homeTown}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianVillageAddress">
              <Form.Label>Village Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="villageAddress"
                value={formData.guardian.villageAddress}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianIdentificationType">
              <Form.Label>Identification Type <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="identificationType"
                value={formData.guardian.identificationType}
                onChange={(e) => handleNestedInputChange(e, 'guardian')}
                required
              >
                <option value="">Select</option>
                <option value="Driver's License">Driver's License</option>
                <option value="National ID">National ID</option>
                <option value="Passport">Passport</option>
                <option value="Others">Others</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="guardianIdentificationUpload">
              <Form.Label>Identification Upload <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="file"
                name="identificationUpload"
                onChange={(e) => handleFileChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="guardianPassportPhotograph">
              <Form.Label>Passport Photograph <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="file"
                name="passportPhotograph"
                onChange={(e) => handleFileChange(e, 'guardian')}
                required
              /><br></br>
            </Form.Group>
          </Card.Body>
        );
      case 3:
        return (
          <Card.Body>
            <h3>Next of Kin Information</h3><hr></hr><br></br>
            <Form.Group controlId="nextOfKinFirstName">
              <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.nextOfKin.firstName}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.nextOfKin.middleName}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinLastName">
              <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.nextOfKin.lastName}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinGender">
              <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.nextOfKin.gender}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinMaritalStatus">
              <Form.Label>Marital Status <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="select"
                name="maritalStatus"
                value={formData.nextOfKin.maritalStatus}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              >
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Control><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinRelationship">
              <Form.Label>Relationship <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="relationship"
                value={formData.nextOfKin.relationship}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              >
                <option value="">Select Relationship</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
              </Form.Select><br></br>
            </Form.Group>

            <Form.Group controlId="nextOfKinPhoneNumber">
              <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.nextOfKin.phoneNumber}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinEmail">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.nextOfKin.email}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinContactAddress">
              <Form.Label>Contact Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="contactAddress"
                value={formData.nextOfKin.contactAddress}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinOccupation">
              <Form.Label>Occupation <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={formData.nextOfKin.occupation}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinPlaceOfBirth">
              <Form.Label>Place of Birth <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="placeOfBirth"
                value={formData.nextOfKin.placeOfBirth}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinStateOfOrigin">
              <Form.Label>State of Origin <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="stateOfOrigin"
                value={formData.nextOfKin.stateOfOrigin}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinLocalGovtArea">
              <Form.Label>Local Government Area <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="localGovtArea"
                value={formData.nextOfKin.localGovtArea}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinHomeTown">
              <Form.Label>Home Town <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="homeTown"
                value={formData.nextOfKin.homeTown}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
            <Form.Group controlId="nextOfKinVillageAddress">
              <Form.Label>Village Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="villageAddress"
                value={formData.nextOfKin.villageAddress}
                onChange={(e) => handleNestedInputChange(e, 'nextOfKin')}
                required
              /><br></br>
            </Form.Group>
          </Card.Body>
        );
      case 4:
        return (
          <Card.Body>
            <h3>Review Your Information</h3><hr></hr>
            <h3>Summary of Submitted Information</h3>
            <ol>Please review the information below to ensure it is correct. Double-check each detail, and if everything is accurate, click the submit button to complete your submission. This step is crucial as you will not be able to make any changes once you submit.</ol>
            <div>
              <h4>Student Information</h4>
              <ol>First Name: {formData.firstName}</ol>
              <ol>Middle Name: {formData.middleName}</ol>
              <ol>Last Name: {formData.lastName}</ol>
              <ol>Gender: {formData.gender}</ol>
              <ol>Date of Birth: {formData.dateOfBirth}</ol>
              <ol>Marital Status: {formData.maritalStatus}</ol>
              <ol>Phone Number: {formData.phoneNumber}</ol>
              <ol>Email: {formData.email}</ol>
              <ol>Contact Address: {formData.contactAddress}</ol>
              <ol>Occupation: {formData.occupation}</ol>
              <ol>Place of Birth: {formData.placeOfBirth}</ol>
              <ol>State of Origin: {formData.stateOfOrigin}</ol>
              <ol>Local Government Area: {formData.localGovtArea}</ol>
              <ol>Home Town: {formData.homeTown}</ol>
              <ol>Village Address: {formData.villageAddress}</ol>
              <ol>Previous Training: {formData.previousTraining}</ol>
              {formData.previousTraining === 'Yes' && (
                <>
                  <ol>Training Place Name: {formData.previousTrainingDetails.trainingPlaceName}</ol>
                  <ol>Training Address: {formData.previousTrainingDetails.trainingAddress}</ol>
                  <ol>Training Duration: {formData.previousTrainingDetails.trainingDuration}</ol>
                </>
              )}
              <ol>Choice of Training Programme: {formData.choiceOfTrainingProgramme}</ol>
              {formData.passportPhotograph && (
                <ol>Passport Photograph: {formData.passportPhotograph.name}</ol>
              )}

              <h4>Guardian  Information</h4>
              <ol>First Name: {formData.firstName}</ol>
              <ol>Middle Name: {formData.middleName}</ol>
              <ol>Last Name: {formData.lastName}</ol>
              <ol>Gender: {formData.gender}</ol>
              <ol>Date of Birth: {formData.dateOfBirth}</ol>
              <ol>Marital Status: {formData.maritalStatus}</ol>
              <ol>Phone Number: {formData.phoneNumber}</ol>
              <ol>Email: {formData.email}</ol>
              <ol>Contact Address: {formData.contactAddress}</ol>
              <ol>Occupation: {formData.occupation}</ol>
              <ol>Place of Birth: {formData.placeOfBirth}</ol>
              <ol>State of Origin: {formData.stateOfOrigin}</ol>
              <ol>Local Government Area: {formData.localGovtArea}</ol>
              <ol>Home Town: {formData.homeTown}</ol>
              {formData.passportPhotograph && (
                <ol>Passport Photograph: {formData.passportPhotograph.name}</ol>
              )}
              {formData.idDocument && (
                <ol>Identification Document: {formData.idDocument.name}</ol>
              )}

              <h4>Next of Kin Information</h4>
              <ol>First Name: {formData.firstName}</ol>
              <ol>Middle Name: {formData.middleName}</ol>
              <ol>Last Name: {formData.lastName}</ol>
              <ol>Gender: {formData.gender}</ol>
              <ol>Date of Birth: {formData.dateOfBirth}</ol>
              <ol>Marital Status: {formData.maritalStatus}</ol>
              <ol>Phone Number: {formData.phoneNumber}</ol>
              <ol>Email: {formData.email}</ol>
              <ol>Contact Address: {formData.contactAddress}</ol>
              <ol>Occupation: {formData.occupation}</ol>
              <ol>Place of Birth: {formData.placeOfBirth}</ol>
              <ol>State of Origin: {formData.stateOfOrigin}</ol>
              <ol>Local Government Area: {formData.localGovtArea}</ol>
              <ol>Home Town: {formData.homeTown}</ol>
            </div>
            <Button variant="success" onClick={handleSubmitt}>Submit</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Submission</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to submit the form? Please review the information carefully as you won't be able to make changes after submission.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirmSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="Application Form - Fakad Infotech">
      <Container className="application-form-wrapper">
        <Row>
          <Col md={12}>
            <Card>
            <Card.Header as="h3" className="custom-header">Application Form</Card.Header>
              {error && (
                <Alert variant="danger">
                  <FaExclamationCircle /> {error}
                </Alert>
              )}
              {renderStepContent()}
              <Card.Footer className="custom-footer">
                {step > 1 && (
                  <Button variant="secondary" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>
                )}
                {step < 4 && (
                  <Button
                    variant="primary"
                    className="ml-2 next-button"
                    onClick={() => setStep(step + 1)}
                  >
                    Next
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default ApplicationForm;