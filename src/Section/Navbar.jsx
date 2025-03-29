import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';

function Navbar() {
  return (
    <nav className='flex items-center justify-between  w-full  py-4 fixed top-0  left-0 h-20  bg-slate-950 z-50  text-white '>
      <div>
        <h1 className='  font-extrabold text-3xl ml-10 sm:ml-20 text-green-600 intro -tracking-tighter'>PARITOSH KUMAR</h1>
      </div>
      <ul className=' hidden sm:flex  items-center gap-8  font-bold mr-3'>
        {['home', 'about','education','skill', 'project', 'contact'].map((section) => (
          <li key={section}>
            <Link
              activeClass='active'
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
