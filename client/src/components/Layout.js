// Layout.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Fakad Infotech offers professional services in resume design, company profile creation, graphics, web design and development, database management, and comprehensive training programs. Our mission is to provide top-notch solutions to meet your business and personal needs." />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
