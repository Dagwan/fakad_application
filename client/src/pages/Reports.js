// src/pages/Reports.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Layout from '../components/Layout';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportPDF from '../pages/ReportPDF';
import '../components/Reports.css'; 

const Reports = () => {
  const [dateRange, setDateRange] = useState('');

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    // Add functionality to filter reports based on the selected date range
  };

  // Sample data for demonstration
  const reportData = `Date Range: ${dateRange}\nPerformance Metrics: Sample Data\nApplication Status: Sample Data\nTraining Statistics: Sample Data`;

  return (
    <Layout title="Reports - Fakad Infotech">
      <Container className="reports-wrapper">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header as="h3">Reports Overview</Card.Header>
              <Card.Body>
                <Card.Text>
                  Welcome to the Reports Page. Here you can view and analyze your performance metrics, application status, and other key data.
                </Card.Text>
                <Form>
                  <Form.Group controlId="formDateRange">
                    <Form.Label>Select Date Range</Form.Label>
                    <Form.Control
                      type="date"
                      value={dateRange}
                      onChange={handleDateRangeChange}
                      placeholder="Select date range"
                    />
                  </Form.Group>
                </Form>
                <Row className="my-3">
                  <Col>
                    <Card>
                      <Card.Header as="h5">Performance Metrics</Card.Header>
                      <Card.Body>
                        <p>View your performance metrics here, including completion rates and scores.</p>
                        {/* Add charts or metrics */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Card>
                      <Card.Header as="h5">Application Status Reports</Card.Header>
                      <Card.Body>
                        <p>Check the status of your applications, including pending and accepted applications.</p>
                        {/* Add status reports */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Card>
                      <Card.Header as="h5">Training Statistics</Card.Header>
                      <Card.Body>
                        <p>View statistics related to training programs, including applicant numbers and success rates.</p>
                        {/* Add training statistics */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <PDFDownloadLink
                      document={<ReportPDF reportData={reportData} />}
                      fileName="report-summary.pdf"
                    >
                      {({ loading }) => (loading ? <Button variant="primary">Loading...</Button> : <Button variant="primary">Download Report</Button>)}
                    </PDFDownloadLink>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Reports;
