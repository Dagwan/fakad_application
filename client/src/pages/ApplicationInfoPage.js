// src/pages/ApplicationInfoPage.js
import React from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Layout from "../components/Layout";
import '../components/ApplicationInfoPage.css'; 

const ApplicationInfoPage = () => {
  return (
    <Layout title="Application Information - Fakad Infotech">
      <Container className="application-info-wrapper">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header as="h3">Application Information</Card.Header>
              <Card.Body>
                <Card.Text>
                  Welcome to the Fakad Infotech application portal. This page provides all the necessary information to apply for our diploma and certificate programs, as well as weekend training courses.
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>About Our Programs</h4>
                    <p>
                      Fakad Infotech offers various training programs designed to enhance your skills and career prospects. Our current programs include:
                    </p>
                    <ul>
                      <li><strong>Diploma in Computer Application:</strong> Comprehensive training for those looking to gain a deep understanding of computer applications.</li>
                      <li><strong>Certificate in Computer Application:</strong> A shorter course focused on fundamental computer skills and applications.</li>
                      <li><strong>Weekend Training:</strong> Flexible weekend classes for working professionals who want to upskill without disrupting their weekday schedules.</li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>How to Apply</h4>
                    <p>
                      To apply for any of our training programs, please follow these steps:
                    </p>
                    <ul>
                      <li>Complete the online application form available on this portal.</li>
                      <li>Provide details about your personal information, educational background, and contact information.</li>
                      <li>Submit any required documents, including a passport photograph and identification proof.</li>
                      <li>Upon submission, your application will be reviewed by our team, and you will receive a confirmation email with further instructions.</li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>Required Information</h4>
                    <p>
                      Make sure to include the following information in your application:
                    </p>
                    <ul>
                      <li><strong>Personal Details:</strong> Full name, date of birth, contact details, and address.</li>
                      <li><strong>Educational Background:</strong> Details of previous training or education relevant to the program.</li>
                      <li><strong>Program Choice:</strong> Indicate whether you are applying for the diploma, certificate, or weekend training program.</li>
                      <li><strong>Additional Documents:</strong> Passport photograph, proof of identification, and any other requested documents.</li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>Contact Us</h4>
                    <p>
                      If you have any questions or need help with your application, feel free to contact us:
                    </p>
                    <ul>
                      <li>Email: fakadinfo@gmail.com</li>
                      <li>Phone: 08182839401 or 08065763465</li>
                      <li>You can also check <a href="/our-services" target="blank">our services</a></li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4>Important Information</h4>
                    <p>
                      Please review all instructions carefully before submitting your application. Incomplete or inaccurate applications may delay processing. We are committed to equal opportunity and strive to provide a fair and supportive application process for all candidates.
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ApplicationInfoPage;
