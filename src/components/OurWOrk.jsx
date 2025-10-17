import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWOrk = () => {
const workData = [
  {
    title:'Mobile App Marketing',
    description:'We turn bold ideas into powerful digital solutions that connect, engage, and drive results.',
    image:assets.work_mobile_app
  },
  {
    title:'Dashboard management',
    description:'We turn bold ideas into powerful digital solutions that connect, engage, and drive results.',
    image:assets.work_dashboard_management
  },
  {
    title:'Fitness app promotion',
    description:'We turn bold ideas into powerful digital solutions that connect, engage, and drive results.',
    image:assets.work_fitness_app
  },
]

  return (
    <div id ='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 box-sh text-gray-700 dark:text-white'>

   <Title title='Our latest work' desc='from strategy to execution ,we craft digital solution that mov your business forward . '/>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20 max-w-5xl'>
  {workData.map((work, index) => (
    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
      <img src={work.image} className='w-full rounded-xl ' alt="" />
      <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
      <p className='text-sm opacity-60 w-5/6 '>{work.description}</p>

    </div>
  ))}

</div>

    </div>

    
    
  )
}

export default OurWOrk