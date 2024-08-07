import React from "react";
import Layout from "../components/Layout";
import '../components/TermsAndConditions.css';
import BackToTopButton from './BackToTop';

const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Layout title="Terms and Conditions - Fakad Infotech">
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>Effective Date: {currentDate}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Fakad Infotech. These terms and conditions outline the rules and regulations for the use of Fakad Infotech's Website, located at https://fakad-infotech-centre.netlify.app/. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Fakad Infotech if you do not agree to all the terms and conditions stated on this page.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Fakad Infotech and/or its licensors own the intellectual property rights for all material on Fakad Infotech. All intellectual property rights are reserved. You may access this from Fakad Infotech for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </section>

        <section>
          <h2>3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any website material in any other media;</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material;</li>
            <li>Publicly performing and/or showing any website material;</li>
            <li>Using this website in any way that is or may be damaging to this website;</li>
            <li>Using this website in any way that impacts user access to this website;</li>
            <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity;</li>
            <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;</li>
            <li>Using this website to engage in any advertising or marketing.</li>
          </ul>
          <p>
            Certain areas of this website are restricted from being accessed by you and Fakad Infotech may further restrict access by you to any areas of this website, at any time, in absolute discretion. Any user ID and password you may have for this website are confidential and you must maintain confidentiality as well.
          </p>
        </section>

        <section>
          <h2>4. Your Privacy</h2>
          <p>Please read our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </section>

        <section>
          <h2>5. No warranties</h2>
          <p>
            This website is provided "as is," with all faults, and Fakad Infotech expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.
          </p>
        </section>

        <section>
          <h2>6. Limitation of liability</h2>
          <p>
            In no event shall Fakad Infotech, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract.  Fakad Infotech, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
          </p>
        </section>

        <section>
          <h2>7. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent Fakad Infotech from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>
        </section>

        <section>
          <h2>8. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>
        </section>

        <section>
          <h2>9. Variation of Terms</h2>
          <p>
            Fakad Infotech is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis.
          </p>
        </section>

        <section>
          <h2>10. Assignment</h2>
          <p>
            The Fakad Infotech is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
          </p>
        </section>

        <section>
          <h2>11. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between Fakad Infotech and you in relation to your use of this website and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2>12. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Federal Capital Territory, Abuja for the resolution of any disputes.
          </p>
        </section>
      </div>
      <BackToTopButton />
    </Layout>
  );
};

export default TermsAndConditions;
