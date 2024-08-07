// src/components/ReportPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
  },
});

const ReportPDF = ({ reportData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Reports Summary</Text>
        <Text style={styles.content}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.content}>Report Data: {reportData}</Text>
      </View>
      {/* Add more sections as needed */}
    </Page>
  </Document>
);

export default ReportPDF;
