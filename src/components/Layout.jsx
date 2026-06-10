import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCta from './FloatingCta';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Layout;
