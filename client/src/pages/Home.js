import React, { useEffect, useState, useRef, pauseRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../components/Home.css';
import BackToTopButton from './BackToTop';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/homepic.png',
    '/homepic.png'
  ];

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [showSlides, setShowSlides] = useState(true);

  useEffect(() => {
    let intervalId;
    if (showSlides) {
      intervalId = setInterval(() => {
        slideNext();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(intervalId);
  }, [currentParagraphIndex, showSlides]);

  const slideNext = () => {
    setCurrentParagraphIndex((prevIndex) => (prevIndex + 3 < paragraphs.length ? prevIndex + 3 : 0));
  };

  const toggleShowSlides = () => {
    setShowSlides((prevState) => !prevState);
  };

  const paragraphs = [
    {
      heading: "Certificate in Computer Application (1-3 Months)",
      content: "Our Certificate in Computer Application program is meticulously crafted to provide foundational knowledge in computer usage. Spanning 1-3 months, this program covers essential skills needed for today's digital world. Students will start with Computer Appreciation, gaining familiarity with basic computer operations and hardware. Internet Basics will teach how to navigate the web effectively and safely. The program also includes Microsoft Word, where students will learn to create and format documents, Microsoft Excel for managing data and performing calculations, and Microsoft PowerPoint for designing engaging presentations. This certificate is perfect for beginners who want to develop a robust understanding of essential computer applications, providing a solid base for further learning or immediate practical use in various fields."
    },
    {
      heading: "Diploma in Computer Application (1-6 Months)",
      content: "The Diploma in Computer Application program offers an in-depth and comprehensive understanding of various computer applications over 1-6 months. Starting with Computer Appreciation and Internet Basics, students will solidify their basic computer skills. The curriculum advances to include Microsoft Word for professional document preparation, Microsoft Excel for complex data management and analysis, and Microsoft PowerPoint for creating impactful presentations. Additionally, students will learn Microsoft Publisher for desktop publishing tasks and Corel Draw for graphic design, allowing them to create professional-quality graphics and layouts. This diploma is ideal for individuals aiming to enhance their computer proficiency and pursue advanced skills, equipping them with the tools needed for diverse professional roles in today's tech-driven environment."
    },
    {
      heading: "Weekend Home Computer Training (N50,000 Per Week)",
      content: "Our Weekend Home Computer Training program is designed for individuals with busy schedules who still want to gain or enhance their computer skills. For N50,000 per week, our expert instructors will provide personalized training sessions at your home, ensuring you receive focused and convenient learning. This program covers all essential areas, from basic computer operations to advanced applications like Microsoft Word, Excel, and PowerPoint. The flexible weekend schedule allows for intensive, hands-on learning without disrupting your weekday commitments. This training is perfect for professionals looking to upgrade their skills, students needing extra help, or anyone seeking to become more proficient with computer technology in the comfort of their own home."
    },
    {
      heading: "Advanced Computer Training Programs",
      content: "At Fakad Infotech Centre, we offer advanced computer training programs designed to meet the needs of professionals and enthusiasts seeking to deepen their technical skills. Our courses include specialized training in programming languages such as Python, JavaScript frameworks like React and Angular, database management with MySQL and MongoDB, and cloud computing platforms such as AWS and Azure. Whether you're looking to advance your career or explore new technologies, our expert instructors and hands-on approach ensure you gain practical, industry-relevant skills."
    },
    {
      heading: "Professional Business Services",
      content: "At FAKAD Infotech Centre, we offer a wide range of professional business services designed to meet the diverse needs of our clients. Our Typesetting service ensures that your documents are professionally formatted and ready for publication. Our Graphics Design team creates visually appealing designs for various purposes, from marketing materials to personal projects. We also provide Software Installation and Selling services, offering a wide range of software solutions to enhance your business operations. Additionally, we specialize in Printing of Banners, Flyers, and Business Cards, helping you promote your business effectively. Our Lamination and Binding services ensure that your documents are well-preserved and professionally presented. For those with damaged devices, our Phones Repairs service provides quick and reliable fixes."
    },
    {
      heading: "Cyber Café Services",
      content: "Located at Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja, our Cyber Café offers a range of services to meet your internet and computing needs. Whether you need high-speed internet access, document printing, scanning, or general computer use, our Cyber Café is equipped to serve you. We ensure a comfortable and secure environment where you can work, study, or browse the internet. Our knowledgeable staff is always on hand to assist with any technical issues or questions you may have."
    }

  ];

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleColumnHover = (column) => {
    if (column === 1) {
      setIsExpanded1(true);
      setIsExpanded2(false);
    } else if (column === 2) {
      setIsExpanded1(false);
      setIsExpanded2(true);
    }
  };

  const handleColumnLeave = () => {
    setIsExpanded1(false);
    setIsExpanded2(false);
  };

  const [visibleLayers, setVisibleLayers] = useState([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const layers = document.querySelectorAll('.layer');
      layers.forEach((layer, index) => {
        const rect = layer.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setVisibleLayers(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <Layout title="Home - Fakad Infotech">
      <section id="home">
        <div className="image-slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${image})` }}
            ></div>
          ))}
        </div>
        <div className="welcome">
          <div className="text-container">
            <h4>WELCOME TO</h4>
            <h1>FAKAD INFOTECH CENTRE</h1>
            <p>
              Fakad Infotech Centre is a leading computer business center offering comprehensive services including computer training, business services, and more. Our commitment is to provide top-notch services tailored to meet your needs.
            </p>
          </div>
        </div>
      </section>

<article class="approach-container">
  <section class="approach-main-container">
    <div class="approach-left-content">
      <img src={`${process.env.PUBLIC_URL}/left-content-image.jpg`} alt="left content image" class="left-image" />
      <div class="text-content">
        <h1>APPROACH TO LEARNING</h1>
        <p>
          At FAKAD Infotech Centre, our personalized approach to learning and business solutions inspires our clients to achieve more. We combine the best practices in technology and business to deliver innovative solutions and training that open pathways to success.
        </p>
        <p>
          Our commitment to excellence extends beyond traditional methods. We embrace continuous improvement and adaptability, ensuring our clients stay ahead in a rapidly evolving digital landscape. By fostering a collaborative environment, we empower individuals and businesses to thrive in today's competitive world.
        </p>
      </div>
    </div>
    <div class="approach-right-content-image">
      <img src={`${process.env.PUBLIC_URL}/homepic2.png`} alt="right content image" class="right-image" />
    </div>
  </section>
</article>


      <hr />
      <article class="buidling-content">
      <aside className="home-image-and-content-left">
        <div className="left-container1">
          <div className="top-content-and-image">
            <img src={`${process.env.PUBLIC_URL}/aside-home-images-left.png`} alt="Aside home image left" />
          </div>
          <div className="content1">
            <h5>BUILDING INDIVIDUAL STRENGTHS</h5>
            <h1>NO TWO STUDENTS LEARN THE SAME WAY</h1>
            <p>At FAKAD Infotech Centre, we place each student at the center of their own learning experience. Our instructors consider learning styles, as well as existing knowledge, skills, and understanding, to develop lessons and activities that offer personal challenge, growth, and success.</p>
            <p> FAKAD instructors challenge and stretch students' abilities through teacher-led and student-led learning across individual and group activities. You will be inspired to go beyond the books and truly engage with your personal learning journey.</p>
            <Link to="/training"><button>FIND OUT MORE</button></Link>

          </div>
        </div>
        <div className="right-container1">
          <div className="right-content-and-image1">
            <img src={`${process.env.PUBLIC_URL}/right-content-and-image.jpg`} alt="Right content image" />
            <div className="empty-field">
              {/* {[...Array(12)].map((_, index) => (
                <hr key={index}></hr>
              ))} */}
            </div>
          </div>
        </div>
      </aside>
      </article>

      <section className="sliding-paragraphs-container">
        <div className="container">
          <h2>Comprehensive Computer Training Programs</h2>
          <div className="sliding-paragraphs">
            {paragraphs.slice(currentParagraphIndex, currentParagraphIndex + 3).map((paragraph, index) => (
              <div key={index} className="sliding-paragraph">
                <h3>{paragraph.heading}</h3>
                <p>{paragraph.content}</p>
                <Link to="/training"><button>FIND OUT MORE</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="for-all-experiences" id="for-all-experiences">
        <div className="learning-experience-background-image">
          <img src={`${process.env.PUBLIC_URL}/learning-experience-image-background.png`} alt="learning experience background image" />
        </div>
        <div className="learning-experience-content-text">
          <h1>Professional Business Services</h1>
          <p>At FAKAD Infotech Centre, we offer a wide range of professional business services designed to meet the diverse needs of our clients. Our Typesetting service ensures that your documents are professionally formatted and ready for publication. Our Graphics Design team creates visually appealing designs for various purposes, from marketing materials to personal projects. We also provide Software Installation and Selling services, offering a wide range of software solutions to enhance your business operations. </p>
          <Link to="/our-services"><button>FIND OUT MORE</button></Link>
        </div>
      </article> <hr></hr>

      <section className="advanced-training-container">
        <div className="container">
          <h2>Explore Advanced Training Options</h2>
          <p>
            Expand your skills with our advanced training programs. Whether you're interested in programming languages, web development frameworks, or cloud computing, we have courses designed to take your career to the next level.
          </p>

          <Link to="/training"><button>VIEW COURSES</button></Link>

        </div>
      </section>

      <article className="reach-for-the-start" id="reach-for-the-start">
        <div className="reach-content" id="reach-content">
          <div className="reach-image" id="reach-image">
            <img src={`${process.env.PUBLIC_URL}/reach-for-the-start-image.png`} alt="reach for the start image" />
          </div>

          <div className="reach-text" id="reach-text">
            <h1>Commitment to Excellence</h1>
            <p>At FAKAD Infotech Centre, we are committed to excellence in all we do. Our experienced instructors, ensure that every student receives the best possible training.</p>
            <Link to="/training"><button>MORE ABOUT OUR ENROLMENT</button></Link>
          </div>
        </div>
      </article>

      <section className="interactive-columns-container">
        <div className="container">
          <h2>Real-World Experience and Success</h2><hr></hr>
          <div className="columns-wrapper">
            <div
              className={`column ${isExpanded1 ? 'expanded' : ''}`}
              onMouseEnter={() => handleColumnHover(1)}
              onMouseLeave={handleColumnLeave}
            >
              <h3>Real-World Applications</h3>
              <p>Hover over this column to see the content.</p>
              {isExpanded1 && (
                <div className="expanded-content">
                  <p>At FAKAD Infotech Centre, we emphasize real-world applications in all our training programs. Our courses are designed not just to teach theoretical knowledge but to provide practical skills that students can apply immediately in their personal and professional lives. From creating professional documents and managing data to designing compelling presentations and graphics, our students learn to use technology to solve real-world problems effectively.</p>
                  <Link to="/our-services">Find out</Link>
                </div>
              )}
            </div>
            <div
              className={`column ${isExpanded2 ? 'expanded' : ''}`}
              onMouseEnter={() => handleColumnHover(2)}
              onMouseLeave={handleColumnLeave}
            >
              <h3>Success Stories</h3>
              <p>Hover over this column to see the content.</p>
              {isExpanded2 && (
                <div className="expanded-content">
                  <p>Many of our students have gone on to achieve great success after completing our training programs. From securing better job opportunities to starting their own businesses, the skills and knowledge gained at FAKAD Infotech Centre have empowered them to reach new heights. Our alumni network is a testament to the effectiveness of our training, with many former students sharing their success stories and how our programs have made a significant impact on their careers.</p>
                  <Link to="/our-services">Find out</Link>
                </div>
              )}
            </div>
            <div
              className={`column ${isExpanded2 ? 'expanded' : ''}`}
              onMouseEnter={() => handleColumnHover(2)}
              onMouseLeave={handleColumnLeave}
            >
              <h3>Commitment to Excellence</h3>
              <p>Hover over this column to see the content.</p>
              {isExpanded2 && (
                <div className="expanded-content">
                  <p>At FAKAD Infotech Centre, we are committed to excellence in all we do. Our experienced instructors, state-of-the-art facilities, and comprehensive curriculum ensure that every student receives the best possible education and training. We continuously update our programs to keep pace with the latest technological advancements and industry trends, ensuring our students are well-prepared to meet the challenges of the modern world.</p>
                  <Link to="/our-services">Find out</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> <hr></hr>

      <section id="home-layer">
        <h1>Unlock Your Potential with FAKAD Infotech Centre</h1>
        <div className="layer-container">
          <div className={`layer ${visibleLayers[0] ? 'visible' : ''}`} id="layer1">
            <h3>Mastering Essential Computer Skills</h3>
            <p>Dive into our Certificate in Computer Application program and gain essential skills in computer appreciation, internet navigation, Microsoft Word, Excel, and PowerPoint. Perfect for beginners looking to build a solid foundation in digital literacy and office productivity.</p>
          </div>
          <div className={`layer ${visibleLayers[1] ? 'visible' : ''}`} id="layer2">
            <h3>Advanced Diploma in IT Solutions</h3>
            <p>Elevate your career with our Diploma in Computer Application, offering in-depth training in advanced computer operations. Explore topics like Microsoft Publisher, Corel Draw, and comprehensive business services including typesetting, graphics design, and software installation.</p>
          </div>
          <div className={`layer ${visibleLayers[2] ? 'visible' : ''}`} id="layer3">
            <h3>Customized Business Solutions</h3>
            <p>At FAKAD Infotech Centre, we specialize in tailored business solutions. From printing banners and business cards to providing expert phone repairs and lamination services, our comprehensive offerings ensure your business stands out with professional excellence.</p>
          </div>
          <div className={`layer ${visibleLayers[3] ? 'visible' : ''}`} id="layer4">
            <h3>Flexible Learning Options</h3>
            <p>Experience our Weekend Home Computer Training designed for busy professionals. With personalized sessions focusing on practical skills in Microsoft Office and beyond, you'll enhance your expertise from the comfort of your home, ensuring maximum flexibility and convenience.</p>
          </div>
        </div>
      </section>


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
          <h5>Interested in find more about our interactive Features? <Link to="/our-services">We've got you covered</Link></h5>

        </div>
      </section>
      <BackToTopButton />
    </Layout>
  );
};

export default Home;
