import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../components/NavBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <Container className="d-flex justify-content-between">
          <div className="top-bar-left">
            <span>Enquiry? Call: +2348065763465</span>
          </div>
          <div className="top-bar-right">
            <Link to="/login" className="login-link">Login</Link>   |  <Link to="/register" className="login-link">Register</Link>
          </div>
        </Container>
      </div>
      <Navbar expand="lg" className="main-nav" variant="dark" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/" className="brand-logo d-flex align-items-center">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            <h1 className="company-name">Fakad Infotech Centre</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" onClick={handleNavClick}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/our-services" onClick={handleNavClick}>Services</Nav.Link>
              <Nav.Link as={Link} to="/training" onClick={handleNavClick}>Training</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" onClick={handleNavClick}>Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/blog" onClick={handleNavClick}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" onClick={handleNavClick}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
