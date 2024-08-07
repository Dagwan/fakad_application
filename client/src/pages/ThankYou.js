import React from "react";
import Layout from "../components/Layout";
import '../components/ThankYou.css';

const ThankYou = () => {
    return (
        <Layout title="Thank You - Fakad Infotech">
            <div className="thank-you-container">
                <div className="thank-you-message">
                    <hr />
                    <h3>Thank You for Reaching Out!</h3>
                    <p>We appreciate you contacting Fakad Infotech. Your message has been received, and our team is currently reviewing it. We will get back to you as soon as possible with a response. If you have any urgent questions or need immediate assistance, please do not hesitate to call our support team directly.</p>
                    <p>In the meantime, feel free to explore our website or visit our <a href="/contact-us">Contact Page</a> for additional information.</p>
                </div>
            </div>
        </Layout>
    );
};

export default ThankYou;
