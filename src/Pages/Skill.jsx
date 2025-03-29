import React from 'react'
import { skill } from '../Data/SkillData'
import Marquee from "react-fast-marquee";
import '../App.css';

function Skill() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="flex items-center justify-center my-8">
  <div className="relative px-6 py-2 bg-slate-900 text-white rounded-lg">
    <span className="text-lg font-semibold">Skills</span>
    <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600 transform -translate-y-1/2 -translate-x-full"></div>
    <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600  transform -translate-y-1/2 translate-x-full"></div>
  </div>
</div>
      <p className="text-lg sm:text-xl text-green-600 text-center mb-4 intro tracking-wide">
       🚀 Technologies I work with to build awesome projects!</p>

      <Marquee 
                 gradient={false}
                 speed={60}
                 pauseOnHover={true}
                 pauseOnClick={true}
                 delay={0}
                 play={true}
                 direction="right"       
      >
        {skill.map(({ name, logo }) => (
          <div 
            key={name}
            className="flex flex-col items-center mx-8 border-2 border-blue-600 w-40 h-40 bg-slate-900 p-4 rounded-lg shadow-lg mb-2 gradient hover:transform hover:scale-110 transition-all  sm:mt-10 "
          >
            <div className="   flex items-center flex-col justify-center gap-3">
              <img 
                src={logo} 
                alt={name} 
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-white font-extrabold text-lg">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Skill