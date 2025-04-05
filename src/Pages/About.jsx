import React from 'react'
import UserData from '../Data/UserData'
import aboutData from '../Data/aboutData'
import AnimatedSection from '../Section/AnimateSection'
function About() {
  return (
    <AnimatedSection>
    <div className=' bg-slate-950 py-8 md:py-12 lg:py-16 h-fit'>
      <div className='max-w-7xl mx-5 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-12'>
          {/* Text Content */}
          <div className='flex-1'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8'>
              About Me
            </h1>
            <div className="max-w-3xl">
      <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
        {aboutData.intro}{" "}
        <span className="text-pink-500 font-semibold">{aboutData.name}</span>, a{" "}
        <span className="text-green-400 font-semibold">{aboutData.profession}</span>{" "}
        passionate about{" "}
        <span className="text-blue-400">{aboutData.passion}</span>. I enjoy building{" "}
        <span className="text-yellow-400">{aboutData.interests.join(", ")}</span>{" "}
        and experimenting with{" "}
        <span className="text-purple-400">{aboutData.interests[1]}</span>.

        I'm also interested in{" "}
        <span className="text-orange-400">{aboutData.exploring.join(", ")}</span>.{" "}
        Currently, I'm working on projects like a {" "}
        {aboutData.projects.map((project, index) => (
          <span key={index} className={project.color}>
            {project.name}
          </span>
        ))}
        .
      </p>
    </div>
          </div>

          {/* Image */}
          <div className='w-full md:w-1/3 lg:w-1/4 mt-8 md:mt-0'>
            <img 
              src={UserData.image} 
              alt="Paritosh Kumar" 
              className='w-full h-auto rounded-lg shadow-xl 
                        transform transition duration-500 
                        hover:scale-105 hover:shadow-2xl
                        object-cover aspect-square'
            />
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  )
}

export default About