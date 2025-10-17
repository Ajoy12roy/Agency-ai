import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-10
    gap-10 text-gray-700 dark:text-white/80'>
      <h3 className='font-semibold'>Trusted by Leading Companies</h3>  
   
   <div className='flex items-center gap-10 justify-center m-6'>

    {company_logos.map((logo, index) => (
        <img key={index} src={logo} alt="" className='max-h-5 sm:max-h-6
        dark:drop-shadow-xl' />




    ))}
       </div>
    </div>
  )
}

export default TrustedBy