import React from 'react'

const QuizDropdown = (props) => {
  return (
    <>
     <ul className={`${props.isVisible ? 'show' : 'hidden'} quiz-dropdown flex-col absolute bg-white left-20 top-4 rounded-lg w-52 sm:bg-white px-5 py-4 z-[300] sm:top-11 sm:left-8`}>
        <li className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'>Class 9</li>
        <li className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'>Class 10</li>
        <li className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'>Class 11</li>
        <li className='hover:text-blue-700 my-1 rounded-md h-8 flex items-center px-2 w-full text-gray-700'>Class 12</li>
     </ul>
    </>
  )
}

export default QuizDropdown