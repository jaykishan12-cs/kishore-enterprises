import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        
        {/* Left: Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          <a href="#" className="text-slate-600 hover:text-pink-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.976 1.254 2.243 1.316 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.976.975-2.243 1.254-3.608 1.316-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.976-1.254-2.243-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608C4.525 2.503 5.792 2.225 7.158 2.163 8.424 2.105 8.804 2.163 12 2.163z" />
            </svg>
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a href="#" className="text-slate-600 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475z" />
            </svg>
          </a>
        </div>

        {/* Center: Links */}
        <div className="flex gap-6">
          <Link to="/" className="text-slate-600 hover:text-blue-700">Home</Link>
          <Link to="/about" className="text-slate-600 hover:text-blue-700">About</Link>
          <Link to="/services" className="text-slate-600 hover:text-blue-700">Services</Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-700">Contact</Link>
          <Link to="/reviews" className="text-slate-600 hover:text-blue-700">Reviews</Link>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm text-slate-500 text-center md:text-right">
          © 2025 <Link to="/" className="hover:text-blue-700">Kishore Enterprises</Link>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
