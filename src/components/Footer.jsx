import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Mahendhirn S. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/MaheMass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mahendhiran-sakthivel-50ab5a255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mahendhiran23092003@example.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
