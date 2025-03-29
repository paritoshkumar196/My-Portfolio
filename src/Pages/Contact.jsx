import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import UserData from '../Data/UserData'


const Contact = () => {
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
      icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'mailto:paritoshkumar12212@gmail.com">',
      name: 'Email'
    }
  ];

  return (
    <div className=" bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 " >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center">
                <div className="relative px-6 py-2 bg-slate-900 text-white rounded-lg mb-2">
                    <span className="text-lg font-semibold">Get In Touch</span>
                    <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600 transform -translate-y-1/2 -translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600  transform -translate-y-1/2 translate-x-full"></div>
                </div>
            </div>
          <p className="text-lg sm:text-xl text-gray-400">Open for collaborations and new opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-16">
          <div className="bg-slate-900 p-6 sm:p-8 rounded-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">Contact Details</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="text-gray-400 min-w-[80px]">Email:</span>
                <a href="mailto:paritoshkumar12212@gmail.com" className="text-white hover:text-pink-600 transition-colors break-all">
                 paritoshkumar12212@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="text-gray-400 min-w-[80px]">Location:</span>
                <span className="text-white">Bihar,India</span>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-slate-900 p-6 sm:p-8 rounded-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">Availability</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400"> Open for full-time, part-time,internship, and freelance opportunities. Feel free to reach out!</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaFilePdf className="text-red-400" />
                <a href={UserData.resume} className="text-white hover:text-pink-600 transition-colors">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Find Me On</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;