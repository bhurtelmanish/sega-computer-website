import React from 'react'
import { Link } from 'react-router-dom'

const QuizDropdown = (props) => {
  return (
    <>
     <ul className={`${props.isVisible ? 'show' : 'hidden'} quiz-dropdown flex-col absolute bg-white left-20 top-4 rounded-lg w-52 sm:bg-white px-5 py-4 z-[300] sm:top-11 sm:left-8`}>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><Link to='../Quiz' >Class 9</Link></li>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><Link to='../Quiz' >Class 10</Link></li>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><Link to='../Quiz' >Class 11</Link></li>
        <li onClick={props.click} className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'><Link to='../Quiz' >Class 12</Link></li>
     </ul>
    </>
  )
}

export default QuizDropdown