import React from 'react'
import '../../App.css'
import '../../index.css'

const AboutDropdown = (props) => {
  return (
    <>
     <ul className={`${props.isVisible ? 'show' : 'hidden'} about-dropdown flex-col absolute bg-white left-20 top-4 rounded-lg w-56 px-4 py-3 z-[300] sm:top-11 sm:left-8 `}>
        {/* <li className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'>Gallery</li> */}        
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><a href="/#instructors">Instructors</a></li>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><a href="/#services">Gallery</a></li>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><a href="/#achievements">Achievements</a></li>
     </ul>
    </>
  )
}

export default AboutDropdown