import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 text-base py-12 mt-12">
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-800 pb-8">
        
        {/* Website Info */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h2 className="text-white font-mono text-2xl font-bold">Flex.css</h2>
          <p className="text-gray-400 leading-relaxed">
            A sleek collection of animated backgrounds, gradients, and utility tools for your next UI. 
            Log toh notice karinge. 💥
          </p>
          <div className="flex gap-4 mt-2 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-400 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/DeepakPandeyO1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-pink-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-chandra-pandey-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-xl mb-1">Quick Links</h3>
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/gradients" className="hover:text-white transition">Gradients</Link>
          <Link to="/previewbg" className="hover:text-white transition">Preview</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>

        {/* Support / Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-xl mb-1">Resources</h3>
          <Link to="/faq" className="hover:text-white transition">FAQs</Link>
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
        </div>
      </div>

      <div className="w-11/12 max-w-6xl mx-auto mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Flex.css</span> · Made with 💖 by Deepak Pandey
      </div>
    </footer>
  );
};

export default Footer;
