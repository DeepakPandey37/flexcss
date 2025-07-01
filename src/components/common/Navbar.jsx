import React from 'react'
import { Button } from '../ui/button'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Home, InfoIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/20 ${className}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center py-6 text-white">
          
          <div className="font-mono text-xl">
            
              Flex.css
            
          </div>

          
          <ul className="flex gap-6 font-mono text-3xl items-center">
          
            <li className="hover:text-pink-400 transition-colors">
              <Button
                variant="ghost"
                className="p-2"
                onClick={() => navigate("/")}
              >
                <Home size={32} />
              </Button>
            </li>

           
            <li className="hover:text-pink-400 transition-colors">
              <Button
                variant="ghost"
                className="p-2"
                onClick={() => navigate("/about")}
              >
                <InfoIcon size={32} />
              </Button>
            </li>

            
            <li className="hover:text-pink-400 transition-colors">
              <a
                href="https://github.com/DeepakPandey37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="p-2">
                  <FaGithub size={30} />
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
                  <FaLinkedin size={30} />
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
                  <FaTwitter size={30} />
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
