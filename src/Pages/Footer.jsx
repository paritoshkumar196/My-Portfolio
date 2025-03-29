import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import sections from '../Section/sections';


const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://www.linkedin.com/in/paritosh-kumar-a07766287/',
      name: 'LinkedIn'
    },
    {
      icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 " />,
      url: 'https://github.com/paritoshkumar196',
      name: 'GitHub'
    },
    {
      icon: <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 " />,
      url: 'https://www.instagram.com/itsparitoshkushwaha?igsh=dWV2bWRyZDU0NXZ1',
      name: 'Instagram'
    },
    {
      icon: <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://twitter.com/yourhandle',
      name: 'Twitter'
    },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600">Paritosh Kumar</h3>
            <p className="text-lg leading-relaxed">
              Passionate developer creating digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link
                    to={section.name}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-lg hover:text-pink-600 transition-colors cursor-pointer"
                  >
                    {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2 text-lg">
              <p>Bihar, India</p>
              <a href="mailto:paritoshkumar12212@gmail.com" className="block hover:text-pink-600">
            paritoshkumar12212@gmail.com
              </a>
             
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email (coming...)"
                className="px-4 py-2 bg-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6 text-center text-xl">
          <p>
            © {new Date().getFullYear()} ParitoshKumar. Made with <FaHeart className="inline text-pink-600" /> in India
          </p>
          <p className="mt-1">
            Open source on <a 
              href="https://github.com/yourusername/portfolio" 
              className="text-pink-600 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
