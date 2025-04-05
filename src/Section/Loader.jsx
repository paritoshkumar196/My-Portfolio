import React from 'react'
import '../App.css'
import { div } from 'framer-motion/client'
function Loader() {
  return (
    <div className='h-screen flex items-center justify-center bg-slate-950 text-white'>
    <div class="loader">
    <span>P</span>
    <span>A</span>
    <span>R</span>
    <span>I</span>
    <span>T</span>
    <span>O</span>
    <span>S</span>
    <span>H</span>
  </div>
  </div>
  )
}

export default Loader