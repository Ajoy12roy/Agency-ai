import React, { useState, useRef } from 'react'
import { motion } from "motion/react"

const ServiceCard = ({service,theme, index}) => {

const [position, setPosition] = useState({ x: 0, y: 0 })
const [visible, setVisible] = useState(false);

const divRef = useRef(null);
const handleMouseMove =(e) => {
  const bounds = divRef.current.getBoundingClientRect();
  setPosition({
    x: e.clientX - bounds.left,  y: e.clientY - bounds.top })
}


  return (
   

    < motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{opacity: 1, y: 0}}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{once: true}}


      className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl shadow-md hover:shadow-cyan-400  border border-cyan-600 dark:border-gray-700  ${ theme === 'dark' ? 'bg-blue-700 text-white/70' : 'bg-gray-500 text-white' }`} onMouseEnter = {() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 w-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />
      <div className='flex items-center gap-10 p-8 hover:p-8 hover:m-0.5 transition-all rounded-[10px] bg-gray-600 dark:bg-gray-900 z-10  relative'>
        <div className='bg-gray-400 dark:bg-gray-700 p-4 rounded-full flex-shrink-0'>
          <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
        </div>
        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}


export default ServiceCard