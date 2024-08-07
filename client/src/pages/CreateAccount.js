import React from "react";
import Layout from "../components/Layout";
import '../components/CreateAccount.css';  

const CreateAccount = () => {
  return (
    <Layout title="Create Account - Fakad Infotech">
      <div className="create-account-container">
        <div className="create-account-message">
          <hr />
          <h3>Account Successfully Created</h3>
          <p>Thank you for registering with Fakad Infotech! You can now log in to your account using the username and password you created to continue with your application. If you have any questions or need assistance, please don't hesitate to <a href="/contact-us">contact</a> our support team or our<a href="/portfolio"> management</a> team.</p>
          <br />
          <a href="/login" className="login-button">Login</a>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
