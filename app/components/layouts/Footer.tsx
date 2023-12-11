import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6  w-screen bottom-0 left-0">
    <div className="container mx-auto flex justify-between">
      <div className="mx-6">
        <p>UNCLE Barbershop</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
      <div>
        <p>Contact Us:</p>
        <p>yourgreatemail.co</p>
        <p>+321-5678-9007</p>
      </div>
    </div>
  </footer>
);

export default Footer;
