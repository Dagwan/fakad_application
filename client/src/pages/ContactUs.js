import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import Layout from '../components/Layout';
import '../components/ContactUs.css';
import BackToTopButton from './BackToTop';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [weather, setWeather] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate(); // Hook from React Router

    useEffect(() => {
        // Fetch weather data from OpenWeather API
        const fetchWeather = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: 'Kubwa',
                        appid: '60e235e16fea773d9638123ad7f4420b',
                        units: 'metric'
                    }
                });
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };
        fetchWeather();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        // Clear form errors when user starts typing again
        if (formErrors[e.target.id]) {
            setFormErrors({
                ...formErrors,
                [e.target.id]: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form validation
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length === 0) {
            try {
                await axios.post('https://fakad-student-application.onrender.com/contact-us/', formData);
                navigate('/thank-you'); // Redirect to ThankYou page
            } catch (error) {
                console.error('Error submitting contact form', error);
                
            }
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <Layout title="Contact Us - Fakad Infotech">
            <section className="container">
                <Container fluid className="contact-page" style={{ maxWidth: '1200px' }}>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="row mt-5">
                                <h1 className="section-title">Contact Us</h1>
                                <p>Thank you for visiting our website! We value your feedback and inquiries, and we're here to assist you. If you have any questions, need support, or wish to discuss our services, please don't hesitate to reach out to us. You can use the contact form below to send us a message directly. Alternatively, you can also call us or visit our office for more immediate assistance. We look forward to hearing from you and will respond to your message as soon as possible.</p>

                                <div className="col-md-6">
                                    <div className="card h-100 shadow">
                                        <div className="card-body">
                                            <h4 className="card-title mb-4">ICT Consulting</h4>
                                            <p className="card-text">Visit or contact us for your IT Consulting Services.</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdLocationOn size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, Nigeria.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdPhone size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">Tel: +234 810 175 6091</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdEmail size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">E-mail: dagwanpan@gmail.com | dan21017@byui.edu</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100 shadow">
                                        <div className="card-body">
                                            <h4 className="card-title mb-4">Business Consulting</h4>
                                            <p className="card-text">Visit or contact us for other business Consulting Services.</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdLocationOn size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, Nigeria.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdPhone size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">Tel: Contact us at +234 806 575 3465 | +234 818 283 9401.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <MdEmail size={24} />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="mb-0">E-mail: fakadinfo@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={12}>
                            <div className="map-responsive shadow mb-5 bg-white rounded">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.99914490538!2d7.3533241!3d9.1407477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf760a0770bb%3A0x90d8c140ab8ed229!2sVirginia%20Pavilion%20Plaza%2C%20Behind%20Eco-Bank%2C%20Federal%20Housing%20Junction%2C%20Kubwa%2C%20FCT-Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620916743644!5m2!1sen!2sng"
                                    width="100%"
                                    height="500"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                                {weather && (
                                    <div className="weather-info">
                                        <h3>Current Weather</h3>
                                        <p>Temperature: {weather.main.temp}°C</p>
                                        <p>Condition: {weather.weather[0].description}</p>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={12}>
                            <Form className="contact-form shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                                <h2>For any Enquiry</h2>
                                <Form.Group controlId="name">
                                    <Form.Label>Name <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        isInvalid={!!formErrors.name}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
                                </Form.Group><br></br>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        isInvalid={!!formErrors.email}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                                </Form.Group><br></br>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone number <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        isInvalid={!!formErrors.phone}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
                                </Form.Group><br></br>
                                <Form.Group controlId="subject">
                                    <Form.Label>Subject <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        isInvalid={!!formErrors.subject}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.subject}</Form.Control.Feedback>
                                </Form.Group><br></br>
                                <Form.Group controlId="message">
                                    <Form.Label>Message <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={10}
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        isInvalid={!!formErrors.message}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.message}</Form.Control.Feedback>
                                </Form.Group><br></br>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <BackToTopButton />
            </section>
        </Layout>
    );
};

export default ContactUs;
