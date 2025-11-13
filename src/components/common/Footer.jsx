import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 text-sm md:text-base py-8 md:py-12 mt-12">
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 border-b border-gray-800 pb-6 md:pb-8">
        
        
        <div className="flex flex-col gap-3 md:gap-4 max-w-sm">
          <h2 className="text-white font-mono text-xl md:text-2xl font-bold">Flex.css</h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            A sleek collection of animated backgrounds, gradients, and utility tools for your next UI. 
            Log toh notice karenge. 💥
          </p>
          <div className="flex gap-3 md:gap-4 mt-2 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-400 transition"
            >
              <FaFacebook size={22} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://twitter.com/DeepakPandeyO1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-pink-400 transition"
            >
              <FaTwitter size={22} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-chandra-pandey-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-400 transition"
            >
              <FaLinkedin size={22} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={22} className="md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="text-white font-semibold text-lg md:text-xl mb-1">Quick Links</h3>
          <Link to="/" className="hover:text-white transition text-sm md:text-base">Home</Link>
          <Link to="/gradients" className="hover:text-white transition text-sm md:text-base">Gradients</Link>
          <Link to="/previewbg" className="hover:text-white transition text-sm md:text-base">Preview</Link>
          <Link to="/about" className="hover:text-white transition text-sm md:text-base">About</Link>
        </div>

        
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="text-white font-semibold text-lg md:text-xl mb-1">Resources</h3>
          <Link to="/faq" className="hover:text-white transition text-sm md:text-base">FAQs</Link>
          <Link to="/privacy-policy" className="hover:text-white transition text-sm md:text-base">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition text-sm md:text-base">Terms & Conditions</Link>
        </div>
      </div>

      <div className="w-11/12 max-w-6xl mx-auto mt-4 md:mt-6 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Flex.css</span> · Made with 💖 by Deepak Pandey
      </div>
    </footer>
  );
};

export default Footer;