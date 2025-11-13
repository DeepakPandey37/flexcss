import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Home, InfoIcon, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ className = '' }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/20 ${className}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center py-4 md:py-6 text-white">
          
          
          <div className="font-mono text-lg md:text-xl font-bold">
            Flex.css
          </div>

          
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center">
            <li className="hover:text-pink-400 transition-colors">
              <Button
                variant="ghost"
                className="p-2"
                onClick={() => navigate("/")}
              >
                <Home size={28} />
              </Button>
            </li>

            <li className="hover:text-pink-400 transition-colors">
              <Button
                variant="ghost"
                className="p-2"
                onClick={() => navigate("/about")}
              >
                <InfoIcon size={28} />
              </Button>
            </li>

            <li className="hover:text-pink-400 transition-colors">
              <a
                href="https://github.com/DeepakPandey37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="p-2">
                  <FaGithub size={26} />
                </Button>
              </a>
            </li>

            <li className="hover:text-pink-400 transition-colors">
              <a
                href="https://www.linkedin.com/in/deepak-chandra-pandey-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="p-2">
                  <FaLinkedin size={26} />
                </Button>
              </a>
            </li>

            <li className="hover:text-pink-400 transition-colors">
              <a
                href="https://x.com/DeepakPandeyO1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="p-2">
                  <FaTwitter size={26} />
                </Button>
              </a>
            </li>
          </ul>

         
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/20">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-lg"
                  onClick={() => {
                    navigate("/");
                    setIsMenuOpen(false);
                  }}
                >
                  <Home size={24} />
                  Home
                </Button>
              </li>

              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-lg"
                  onClick={() => {
                    navigate("/about");
                    setIsMenuOpen(false);
                  }}
                >
                  <InfoIcon size={24} />
                  About
                </Button>
              </li>

              <li className="border-t border-white/20 mt-2 pt-2">
                <div className="flex gap-4 justify-center py-2">
                  <a
                    href="https://github.com/DeepakPandey37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deepak-chandra-pandey-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a
                    href="https://x.com/DeepakPandeyO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    <FaTwitter size={28} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;