import React from 'react'
import { useState ,memo} from 'react'
import ProjectData from '../Data/ProjectData'
import { FiGithub } from 'react-icons/fi'
import { LuExternalLink } from 'react-icons/lu'
import '../App.css';
function Project1() {
    const [clicked, setclicked] = useState(null)
    return (
        <div className='bg-slate-950 bg'>
            <div className="flex items-center justify-center">
                <div className="relative px-6 py-2 bg-slate-900 text-white rounded-lg">
                    <span className="text-lg font-semibold">Projects</span>
                    <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600 transform -translate-y-1/2 -translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-violet-600  transform -translate-y-1/2 translate-x-full"></div>
                </div>
            </div>
            {/* Project Card */}
            <div className='flex items-center justify-center flex-wrap gap-5'>
                {ProjectData.map((item, index) => (
                    <div
                        key={item.id || index}
                        className='w-[400px] h-[400px] bg-slate-900 m-4 relative 
                 hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-t-lg
                 overflow-hidden'
                    >
                        <button
                            className="absolute bottom-0 right-3 text-2xl font-semibold text-white  z-20"
                            onClick={() => setclicked(prev => (prev === index ? null : index))}
                        >
                            ⋮
                        </button>
                        {clicked === index ? (
                        <div className='absolute inset-0 bg-black/80 rounded-t-lg p-6 flex flex-col justify-between'>
                        {/* Description */}
                        <div className='overflow-x-auto'>
                          <p className='text-gray-200 text-lg leading-relaxed mb-4 font-light'>
                            {item.description}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {item.techStack?.map((tech, i) => (
                              <span 
                                key={i} 
                                className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full 
                                border border-purple-500/30 transition hover:bg-purple-500/30 font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      
                        {/* Links */}
                        <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                          <a 
                            href={item.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all
                            text-emerald-400 hover:text-emerald-300"
                          >
                             <FiGithub className="w-5 h-5" />
                            GitHub
                          </a>
                          
                          <a 
                            href={item.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all
                            text-sky-400 hover:text-sky-300"
                          >
                             <LuExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                        ) : (
                            <div className='flex items-center justify-center flex-col gap-4'>
                                <img src={item.image} alt={item.title} className='rounded-t-lg' />
                                <h1 className='text-pink-600 font-bold text-xl'>{item.name}</h1>
                                <p className='text-white text-center'>A web application to manage employee records, including adding, updating, deleting......</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Project1)