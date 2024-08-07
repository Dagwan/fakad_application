import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../components/OurServices.css';
import '../components/Home.css';
import BackToTopButton from './BackToTop';

const OurServices = () => {
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
    <Layout title="Our Services - Fakad Infotech">
      <div className="services-container">
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Internet Browsing</h3>
                <p>Fast and reliable internet browsing services to keep you connected.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-print"></i>
                </div>
                <h3>Document Printing</h3>
                <p>High-quality document printing for all your needs.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-copy"></i>
                </div>
                <h3>Photocopying</h3>
                <p>Efficient photocopying services to duplicate your documents.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-scan"></i>
                </div>
                <h3>Scanning</h3>
                <p>Advanced scanning services to digitize your documents.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Computer Training</h3>
                <p>Comprehensive computer training programs for all skill levels.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Software Installation</h3>
                <p>Professional software installation and configuration services.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>Resume Design</h3>
                <p>Creative and professional resume design to help you stand out.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>Company Profile Creation</h3>
                <p>Custom company profiles to effectively showcase your business.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Graphics Design</h3>
                <p>High-quality graphics design services for all your visual needs.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Web Design & Development</h3>
                <p>Modern and responsive web design and development services.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Database Management</h3>
                <p>Efficient database management solutions to keep your data organized.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-keyboard"></i>
                </div>
                <h3>Typesetting</h3>
                <p>Professional typesetting services for all your document needs.</p>
              </div>
              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3>Binding and Lamination</h3>
                <p>Secure and professional binding and lamination services for your documents.</p>
              </div>

              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Website Maintenance</h3>
                <p>Reliable website maintenance services to ensure your site is up-to-date and secure.</p>
              </div>

              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-headphones-alt"></i>
                </div>
                <h3>Phone and Laptop Accessories</h3>
                <p>Wide range of high-quality accessories for your phones and laptops.</p>
              </div>


              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>IT Support and Consultation</h3>
                <p>Expert IT support and consultation services to keep your technology running smoothly.</p>
              </div>


              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-keyboard"></i>
                </div>
                <h3>Data Entry Services</h3>
                <p>Accurate and efficient data entry services to manage your information.</p>
              </div>

              <div className="col-md-4 service-item">
                <div className="service-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3>Digital Marketing Services</h3>
                <p>Effective digital marketing strategies to enhance your online presence.</p>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div id="testimonials">
        <div className="container">
          <h2 className="section-title">Customer Testimonials</h2>
          <div className="testimonials">
            <div className="testimonial" style={{ background: '#f0f0f0' }}>
              <blockquote>
                "Excellent Training has been instrumental in upgrading our team's digital skills. Their courses are well-structured and highly informative."
              </blockquote>
              <p>- Dr. Matthew Denis, CEO at Mat Groups Limited</p>
            </div>
            <div className="testimonial" style={{ background: '#e0e0e0' }}>
              <blockquote>
                "The graphic design services provided by Excellent Training exceeded our expectations. Highly recommend!"
              </blockquote>
              <p>- Simon Jerry, Marketing Director at Dan Oil & Gas Plc</p>
            </div>
            <div className="testimonial" style={{ background: '#d0d0d0' }}>
              <blockquote>
                "I have been impressed with the professionalism and efficiency of Excellent Training's website development team."
              </blockquote>
              <p>- Musa Sunday, IT Manager at African technologist</p>
            </div>
            <div className="testimonial" style={{ background: '#c0c0c0' }}>
              <blockquote>
                "The resume design service helped me land my dream job. Thank you, Excellent Training!"
              </blockquote>
              <p>- Mary John, Job Seeker</p>
            </div>
            <div className="testimonial" style={{ background: '#b0b0b0' }}>
              <blockquote>
                "Excellent Training's digital marketing expertise significantly boosted our online presence."
              </blockquote>
              <p>- Alex Joshua, Marketing Manager</p>
            </div>
            <div className="testimonial" style={{ background: '#a0a0a0' }}>
              <blockquote>
                "The customer service at Excellent Training is top-notch. They are always responsive and helpful."
              </blockquote>
              <p>- Treasure Ameh, Customer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="training-container smt-5">
                <h2 className="text-center mb-4">Want to Learn More About our Training?</h2>
                <p className="text-center mb-4">Check out our training programs today and take the first step towards a successful career in IT. Our comprehensive courses are designed to equip you with the skills and knowledge needed to excel in the tech industry.</p>
                <div className="text-center">
                <Link to="/training" className="btn btn-primary btn-lg">Find Out</Link>
                </div>
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
                    <h5>Interested in find more about our interactive Features? <Link to="/training">We've got you covered</Link></h5>

                </div>
            </section>
            <BackToTopButton />
    </Layout>
  );
};

export default OurServices;
