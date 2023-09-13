import React , { useState } from 'react'
import '../App.css'
import '../index.css'
import courseLearning from '../images/courses.png'
import { Data } from './data/Data'
import { FiChevronDown , FiChevronUp } from 'react-icons/fi'
import { SiConcourse } from 'react-icons/si'

const Courses = () => {
  const [arrow , setarrow] = useState(true);
  const [openItemId , setopenItemId] = useState(null);
  const accordianClicked = (dataId) => {
    // setisVisible(!isVisible);
    openItemId === dataId ? setopenItemId(null) : setopenItemId(dataId);
  }
  const icon = arrow ? <FiChevronDown className='text-2xl'/> : <FiChevronUp className='text-2xl'/>;
  return (
    <>
     <div className='w-screen h-auto '>
        <img src={courseLearning} alt="Course Learning" className='cursor-pointer m-auto block sm:h-[33rem]' />
       <div className=' flex flex-col'>
          <div className='flex w-screen flex-col px-5 mt-2'>
              <p className='text-[2.3rem] font-medium'>Important <strong> Courses</strong> </p>
              <p className='text-sm w-full px-1 text-justify text-gray-800'>We can explore some important courses from here</p>
          </div>
          <div className='flex flex-col px-3 w-screen h-auto mt-6 items-center gap-3 '>
                {Data.map(data=>(
                    <div key={data.id} className='bg-gray-50 w-full'>
                        <button onClick={() => accordianClicked(data.id)} className='w-full px-3 h-14 text-md bg-blue-50 flex items-center justify-between mx-auto'>
                            <div className='flex items-center gap-6'><SiConcourse />{data.title}</div>  
                            {icon}
                        </button>
                        {openItemId === data.id && <div className='px-2'>
                          Accordian Description Section Here
                        </div>}
                    </div>
                ))}
          </div>
       </div>


       </div>
    </>
  )
}

export default Courses