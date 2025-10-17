import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 box-sh text-gray-800 dark:text-white'>
<Title title='Meet the team' desc='A passionate team of digital experts dedicated to your
brand’s success.'/>

<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-6 '>
    {teamData.map((member, index) => (
      <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xs shadow-blue-500 dark:shadow-white/10  hover:scale-102 duration-500 transition-all cursor-pointer'>
        <img src={member.image} alt="" className='w-12 h-12 rounded-full object-cover mb-6' />
        <div className='flex-1'>
            <h3 className='text-lg font-semibold'>{member.name}</h3>
            <p className='text-sm opacity-60'>{member.title}</p>

        </div>
</div>
    ))}

    </div>
    </div>

  )
}

export default Teams