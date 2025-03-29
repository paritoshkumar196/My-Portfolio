import React from 'react'
import Eimage from '../assets/icons/blur-23.svg'
import '../App.css';

function Education() {
  const educationData = [
    { year: '2022-present', course: 'Bachelor of Technology', Uname: 'Bihar Engineering University, Patna' },
    { year: '2021-2022', course: 'Intermediate Science', Uname: 'S.N.S.Y College, Purnea' },
    { year: '2019-2020', course: 'Matriculation', Uname: 'Bright Career School, Purnea' },
  ]

  return (
    <div className='bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 bg'>
      <div className="flex items-center justify-center mb-12">
        <div className="relative px-6 py-2 bg-slate-900 text-white rounded-lg">
          <span className="text-lg font-semibold">Education</span>
          <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600 transform -translate-y-1/2 -translate-x-full" />
          <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600 transform -translate-y-1/2 translate-x-full" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto flex gap-30 justify-between">
        {/* Left Side Image */}
        <div className="w-1/3 hidden md:block mr-12">
          <img 
            src={Eimage} 
            alt="Education" 
            className="w-full h-auto object-contain rounded-lg" 
          />
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 space-y-6">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-lg p-6  transition-all duration-300 ease-in-out transform hover:scale-105  hover:shadow-[0px_8px_20px_rgba(255,105,180,0.3)]"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-4 text-center border-b-2 border-white"><span className='font-semibold'>Year: </span>{item.year}</h3>
              
              <div className="flex items-start gap-4">
                <img 
                  src={Eimage} 
                  alt="Icon" 
                  className="w-10 h-10 object-contain rounded-lg" 
                />
                
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-white">{item.course}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.Uname}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education;
