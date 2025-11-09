import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = ({theme} ) => {
  const servicesData = [
    {
        title: "Advertising",
        description: "We turn bold ideas into powerful digital solutions that connect, engage...",
        icon: assets.ads_icon
    },
    {
        title: "Content marketing",
        description: "We turn bold ideas into powerful digital solutions that connect, engage and...",
        icon: assets.content_icon
    },
    {
        title: "Content writing",
        description: "We turn bold ideas into powerful digital solutions that connect, engage and...",
        icon: assets.marketing_icon
    },
    {
        title: "Social media",
        description: "We turn bold ideas into powerful digital solutions that connect, engage..",
        icon: assets.social_icon
    },
  ]

  return (

   <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{once: true}}
   
   id='services' className={`relative flex flex-col
    items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
     pt-30 box-sh ${theme === 'dark' ? 'text-gray-700' : ''} dark:text-white/20`}>
    
     <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

     <Title title='How can we help you?' desc='From strategy
      to execution, we craft digital solutions that
       move your business forward.' />

       <div className='flex flex-col md:grid grid-cols-2 '>
        {servicesData.map((service, index) => (
            <ServiceCard theme={theme} key={index} service={service} index={index} />
        ))
        }
       </div>

   </motion.div>

   
  )
}

export default Services