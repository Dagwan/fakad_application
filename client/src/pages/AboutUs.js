import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBalanceScale, faEye } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import '../components/AboutUs.css';
import '../components/ContactUs.css';
import '../components/OurServices.css';
import BackToTopButton from './BackToTop';

const AboutUs = () => {
    const [weather, setWeather] = useState(null);

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
    return (
        <Layout title="About Us - Fakad Infotech">
            <div className="about-container">
                <section id="about" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h2 className="section-title">About Us</h2>
                                    <p className="section-desc">
                                        Welcome to Fakad Infotech Centre, your premier destination for computer education and business services in Abuja, Nigeria. We specialize in offering high-quality training programs and comprehensive business services to empower individuals and organizations.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="company-info">
                                    <h2 className="section-title">Our Location</h2>
                                    <p>
                                        Located at Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, Nigeria. Contact us at +234 806 575 3465 | +234 818 283 9401 | fakadinfo@gmail.com.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team" className="section bg-light">
                    <div className="container"><hr></hr><hr></hr>
                        <div className="row">
                            {/* Our Vision */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-info">
                                        <FontAwesomeIcon icon={faEye} />
                                        <h3>Our Vision</h3>
                                        <p>Our mission is to build and maintain the most innovative, reliable and cost-effective ICT services to our clients. We aim to achieve these by ensuring that technology integrates harmoniously with your business and personal.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Our Core Values */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-info">
                                        <FontAwesomeIcon icon={faBalanceScale} />
                                        <h3>Our Core Values</h3>
                                        <p>At Fakad Infotech Centre, we are committed to customer satisfaction and our values are: Integrity & Accountability | Team Work Commitment | Excellence Passion & Honesty.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Our Mission */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-info">
                                        <FontAwesomeIcon icon={faBullseye} />
                                        <h3>Our Mission</h3>
                                        <p>To be your most preferred ICT solutions company, delivering unmatched professional services. And a household name when it comes to training and Inspiring people on how to excel in the ICT industry.</p>
                                    </div>
                                </div>
                            </div>

                        </div><hr></hr><hr></hr>
                        <h2 className="section-title">Our Management Team</h2>
                        <div className="row">
                            {/* CEO */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-img">
                                        <img src="ceo.jpeg" alt="CEO" />
                                    </div>
                                    <div className="team-member-info">
                                        <h3>Mr. Hamza Kadiri Usman</h3>
                                        <p>Chief Executive Officer <br></br><span>Chief Instructor</span></p>
                                        <ul>
                                            <li><a href="https://www.facebook.com/"><img src="/fb.png" alt="facebook" className="social" /></a></li>
                                            <li><a href="https://instagram.com/"><img src="/instagram.png" alt="instagram" className="social" /></a></li>
                                            <li><a href="https://www.linkedin.com/"><img src="/linkIn.png" alt="linkedin" className="social" /></a></li>
                                            <li><a href="https://x.com/" target='blank'><img src="/x.png" alt="x" className="social" /></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Operational Manager/Ict */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-img">
                                        <img src="manager.jpg" alt="Operational Manager/Ict" />
                                    </div>
                                    <div className="team-member-info">
                                        <h3>Dagwan Pan'an Danladi</h3>
                                        <p>Operational Manager <br></br><span>Information and Communication Technology</span></p>
                                        <ul>
                                            <li><a href="https://www.facebook.com/"><img src="/fb.png" alt="facebook" className="social" /></a></li>
                                            <li><a href="https://instagram.com/"><img src="/instagram.png" alt="instagram" className="social" /></a></li>
                                            <li><a href="https://www.linkedin.com/"><img src="/linkIn.png" alt="linkedin" className="social" /></a></li>
                                            <li><a href="https://x.com/" target='blank'><img src="/x.png" alt="x" className="social" /></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Computer Operator/Instructor */}
                            <div className="col-md-4">
                                <div className="team-member">
                                    <div className="team-member-img">
                                        <img src="operator.jpg" alt="Computer Operator" />
                                    </div>
                                    <div className="team-member-info">
                                        <h3>Emmanuel Anaele</h3>
                                        <p>Computer Operator <br></br> <span>Instructor</span></p>
                                        <ul>
                                            <li><a href="https://www.facebook.com/"><img src="/fb.png" alt="facebook" className="social" /></a></li>
                                            <li><a href="https://instagram.com/"><img src="/instagram.png" alt="instagram" className="social" /></a></li>
                                            <li><a href="https://www.linkedin.com/"><img src="/linkIn.png" alt="linkedin" className="social" /></a></li>
                                            <li><a href="https://x.com/" target='blank'><img src="/x.png" alt="x" className="social" /></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div><hr></hr><hr></hr>

                            <Row className="justify-content-center">
                                <Col md={12}>
                                    <div className="row mt-5">
                                        <h1 className="section-title">GET IN TOUCH WITH US FOR YOUR BUSINESS AND ICT SOLUTIONS</h1>

                                        <div className="col-md-6">
                                            <div className="card h-100 shadow">
                                                <div className="card-body">
                                                    <h4 className="card-title mb-4">ICT Consulting</h4>
                                                    <p>Thank you for visiting our website! We specialize in providing comprehensive ICT consulting services to help your business leverage technology effectively. Whether you need assistance with web development, graphic design, database management, or any other ICT service, our team of experts is ready to assist. We focus on delivering tailored solutions that meet your specific needs and goals. Our commitment is to ensure your business thrives in the digital age. Please don’t hesitate to reach out through the contact form below or give us a call.</p>
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
                                                    <p>Our support extends beyond ICT services; we also offer expert business consulting to help you navigate the complexities of today’s market. From strategic planning and operations management to marketing and financial analysis, our team provides insights and solutions that drive success. We are dedicated to helping you optimize your business operations for growth and efficiency. By partnering with us, you’ll gain access to a wealth of knowledge and experience. Get in touch today to discuss how we can help elevate your business to new heights.</p>
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
                            </Row><br></br><br></br>

                            <div className="training-container smt-5">
                                <h2 className="text-center mb-4">Want to Learn More About our Training?</h2>
                                <p className="text-center mb-4">Check out our training programs today and take the first step towards a successful career in IT. Our comprehensive courses are designed to equip you with the skills and knowledge needed to excel in the tech industry.</p>
                                <div className="text-center">
                                    <Link to="/training" className="btn btn-primary btn-lg">Find Out</Link>
                                </div>
                            </div>

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
                        </div>
                    </div>
                </section>
            </div >
            <BackToTopButton />
        </Layout >
        );
    };

export default AboutUs;
