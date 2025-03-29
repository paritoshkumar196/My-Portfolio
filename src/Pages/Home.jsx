import React from "react";
import '../App.css';
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { RiContactsFill } from 'react-icons/ri';
import { MdDownload } from 'react-icons/md';
import UserData from '../Data/UserData'

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}hero.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div className="bg-slate-950 min-h-screen pt-20  flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16 gap-8 lg:gap-4  md:gap-10 lg:gap-16"
    style={bgStyle}>
      {/* Left Section - Introduction */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 ">
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight intro">
            Hello, <br />
            This is{" "}
            <span className="text-pink-600">{UserData.name}</span>, I'm a <br />
            Professional <span className="text-green-400">{UserData.designation}</span>.
          </h1>

          {/* Social Media Links */}
          <div className="flex gap-6 sm:gap-8">
            <a
              href={UserData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600  hover:bg-white/10 transition-colors duration-300 rounded-full p-3"
            >
              <BsGithub className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="sr-only">Github</span>

            </a>
            <a
              href={UserData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600  hover:bg-white/10 transition-colors duration-300 rounded-full p-3"
            >
              <BsLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="sr-only">LinkedIn</span>

            </a>
            <a
              href={UserData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600  hover:bg-white/10 transition-colors duration-300 rounded-full p-3"
            >
              <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={UserData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600  hover:bg-white/10 transition-colors duration-300 rounded-full p-3"
            >
              <FaTwitterSquare className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="contact"
              smooth={true}
              className="bg-gradient-to-r from-violet-600 to-pink-500 hover:from-pink-500 hover:to-violet-600 p-[1px] rounded-full transition-all duration-300"
            >
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 rounded-full text-sm sm:text-base font-medium text-white hover:bg-slate-900 transition-colors duration-300">
                <RiContactsFill className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact me
              </button>
            </Link>

            <a
               href={UserData.resume}
               target="_blank"
               rel="noopener noreferrer"

              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-sm sm:text-base font-medium text-white hover:opacity-90 transition-opacity duration-300"
            >
              <MdDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Code Showcase */}
      <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-lg order-1 lg:order-2 ">
        <div className="flex">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
        </div>

        <div className="p-4 lg:p-6">
          <div className="flex gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-orange-400" />
            <div className="h-3 w-3 rounded-full bg-green-200" />
          </div>

          <div className="border-t-2 border-indigo-900 pt-4 overflow-x-auto">
            <code className="font-mono text-xs sm:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Paritosh Kumar</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;