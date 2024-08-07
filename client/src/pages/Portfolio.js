import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import Layout from "../components/Layout";
import { HiOutlineDocumentText } from "react-icons/hi";
import "../components/Portfolio.css";
import '../components/Home.css';
import '../components/AboutUs.css'
import BackToTopButton from './BackToTop';

const Portfolio = () => {
    //Slider
    const [expandedLayerIdx, setExpandedLayerIdx] = useState(null);
    const carouselRef = useRef(null);
    const pauseRef = useRef(false); // Ref to control pausing

    const layers = [
        {
            icon: 'fas fa-desktop',
            color: 'green',
            heading: 'Advanced Training',
            content: 'Our advanced training programs are tailored to meet the needs of professionals and businesses seeking to enhance their technological capabilities. We offer cutting-edge courses that keep you ahead of the curve in the fast-paced world of technology.',
        },
        {
            icon: 'fas fa-cogs',
            color: 'orange',
            heading: 'Innovative Solutions',
            content: 'We provide innovative solutions to help businesses streamline their operations and improve efficiency. Our team of experts is dedicated to developing customized solutions that meet the unique needs of each client, ensuring maximum impact and effectiveness.',
        },
        {
            icon: 'fas fa-users',
            color: 'green',
            heading: 'Community Engagement',
            content: 'FAKAD Infotech Centre is committed to engaging with the community and fostering a culture of continuous learning and growth. We offer a variety of programs and events that bring people together to share knowledge, collaborate, and inspire one another.',
        },
        {
            icon: 'fas fa-award',
            color: 'orange',
            heading: 'Awards and Recognition',
            content: 'We are proud of the numerous awards and recognitions we have received over the years. These accolades are a testament to our commitment to excellence and our dedication to providing the highest quality services and training to our clients and students.',
        },
        {
            icon: 'fas fa-lightbulb',
            color: 'green',
            heading: 'Innovative Ideas',
            content: 'At FAKAD Infotech Centre, we encourage innovative ideas and creative thinking. Our programs are designed to inspire and motivate students to think outside the box and develop unique solutions to complex problems.',
        },
        {
            icon: 'fas fa-chart-line',
            color: 'orange',
            heading: 'Business Growth',
            content: 'Our business growth programs are designed to help businesses expand and thrive in today’s competitive market. We provide the tools and resources needed to achieve sustainable growth and long-term success.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pauseRef.current) { // Check if pauseRef is false (not paused)
                const carousel = carouselRef.current;
                if (carousel) {
                    carousel.scrollBy({
                        top: 0,
                        left: carousel.offsetWidth,
                        behavior: 'smooth',
                    });

                    // Check if the carousel has reached the end
                    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                        setTimeout(() => {
                            // Scroll back to the start without animation
                            carousel.scrollTo({ left: 0, behavior: 'auto' });
                        }, 1000); // Adjust the timeout duration to match the animation duration
                    }
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const toggleLayer = (index) => {
        if (expandedLayerIdx === index) {
            setExpandedLayerIdx(null); // Close the currently open layer
        } else {
            setExpandedLayerIdx(index); // Open the selected layer
            pauseRef.current = true; // Pause the sliding animation
        }
    };

    return (
        <Layout title="Portfolio - Fakad Infotech">
            <Container className="heading-portfolio">
                <h1 className="mt-5 mb-3">Portfolio</h1>
                <p className="mb-4">
                    Welcome to our showcase of past projects and collaborations, demonstrating our commitment to excellence and innovation in every endeavor. At Fakad Infotech, we take pride in delivering high-quality solutions tailored to meet our clients' unique needs.
                </p>
                <p>
                    Explore our portfolio to discover more about how Fakad Infotech can elevate your business. Whether you're looking for web development, graphic design, digital marketing, or training solutions, we're here to turn your vision into reality.
                </p>

                {/* Cards */}
                <Row>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title><HiOutlineDocumentText /> Dagwan Portfolio</Card.Title>
                                <Card.Text>
                                    A portfolio website showcasing creative designs and projects.
                                </Card.Text>
                                <a href="https://dagwanportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title><HiOutlineDocumentText /> Fakad Student Application</Card.Title>
                                <Card.Text>
                                    Application form API for collecting student data.
                                </Card.Text>
                                <a href="https://fakad-student-application.onrender.com/application-form/api-docs/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">API Documentation</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title><HiOutlineDocumentText /> E-Card Application</Card.Title>
                                <Card.Text>
                                    API for collecting customer data for business card creation.
                                </Card.Text>
                                <a href="https://e-card-application.onrender.com/api-docs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">API Documentation</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>


            <div className="about-container">
                <section id="about" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h2 className="section-title">What we Stand for</h2>
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
                    <div className="container">
                        <h2 className="section-title">Our MANAGEMENT Team</h2>

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
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <section className="interactive-layered-section">
                <div className="container">
                    <h2>Explore Our Interactive Features</h2>
                    <div className="layer-carousel" ref={carouselRef}>
                        {layers.map((layer, index) => (
                            <div
                                key={index}
                                className={`interactive-layer ${expandedLayerIdx === index ? 'expanded' : ''}`}
                            >
                                <i className={`interactive-layer-icon ${layer.icon}`} style={{ color: layer.color }}></i>
                                <h3>{layer.heading}</h3>
                                <div className="toggle-content">
                                    {expandedLayerIdx === index ? (
                                        <>
                                            <p>{layer.content}</p>
                                            <button className="close-button" onClick={() => setExpandedLayerIdx(null)}>x</button>
                                        </>
                                    ) : (
                                        <button className="toggle-button" onClick={() => toggleLayer(index)}>
                                            +
                                        </button>

                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h5>Interested in find more about our interactive Features? <Link to="/our-services">You've got you covered</Link></h5>

                </div>
            </section>
            <BackToTopButton />
        </Layout>
    );
};

export default Portfolio;
