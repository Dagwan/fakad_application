import React from 'react';
import Layout from '../components/Layout';
import '../components/PrivacyPolicy.css';
import BackToTopButton from './BackToTop';

const Policy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout title="Privacy Policy - Fakad Infotech">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <section>
          <h2>Introduction</h2>
          <p>
            This Privacy Policy applies to Fakad Infotech (hereinafter, "we", "us", or "our"),
            located at Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing
            Junction, Kubwa, FCT-Abuja, Federal Republic of Nigeria.
          </p>
          <p>
            We respect your privacy and are committed to protecting personally identifiable
            information you may provide us through the Website. We have adopted this privacy policy
            ("Privacy Policy") to explain what information may be collected on our Website, how we
            use this information, and under what circumstances we may disclose the information to
            third parties.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect certain personal information that you voluntarily provide to us when you
            express an interest in obtaining information about us or our products and services when
            you register for an account, or when you contact us.
          </p>
          <ul>
            <li>Personal Data</li>
            <li>Payment Information</li>
            <li>Usage Data</li>
          </ul>
        </section>
        <section>
          <h2>Use of Your Information</h2>
          <p>We may use the information we collect in the following ways:</p>
          <ul>
            <li>To provide, operate, and maintain our website</li>
            <li>To improve, personalize, and expand our website</li>
            <li>To understand and analyze how you use our website</li>
          </ul>
        </section>
        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page. You are advised to review this Privacy
            Policy periodically for any changes. Changes to this Privacy Policy are effective when
            they are posted on this page.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
            <br />
            By email: Kadiri.hamza80@yahoo.com
          </p>
        </section>
        <p className="policy-date">Last updated: {currentDate}</p>
      </div>
      <BackToTopButton />
    </Layout>
  );
};

export default Policy;
