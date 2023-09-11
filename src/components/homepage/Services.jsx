import React , { useState } from 'react'
import '../../App.css'
import { ServiceData }  from '../../../public/ServiceData'

const Services = () => {
  const [selectedTitle , setSelectedTitle] = useState('all');
  const filterMenu = (title) => {
    setSelectedTitle(title);
  }
  const filterImages = selectedTitle === 'all' ? ServiceData : ServiceData.filter(image => image.title.includes(selectedTitle));
  return (
    <>
     <div id='services' className=' h-auto px-4  w-screen mt-14'>
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Services</h2>
            <p className="mt-3 text-md leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>
        <div className='flex flex-wrap gap-2 w-full items-center justify-center mt-6'>
            <button onClick={()=> filterMenu('classroom')} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer  min-w-[7rem] px-0 justify-center h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'>Classes</button>
            <button onClick={()=> filterMenu('lab')} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer  min-w-[7rem] px-0 justify-center h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'>Lab</button>
            <button onClick={()=> filterMenu('exam')} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer  min-w-[7rem] px-0 justify-center h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'>Exams</button>
            <button onClick={()=> filterMenu('event')} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer  min-w-[7rem] px-0 justify-center h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'>Events</button>
            <button onClick={()=> filterMenu('all')} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer  min-w-[7rem] px-0 justify-center h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'>All</button>
        </div>

        <div className='h-[70rem] service-img-container gap-3 lg:gap-5 max-w-[62rem] bg-gray-100 mx-auto mt-10'>
            {filterImages.map((data)=>(
                <img key={data.id} src={data.image} alt="Services Images" className='cursor-pointer w-full mb-4' />
            ))}
        </div>
     </div>
    </>
  )
}

const imageComponent = () => {

}

export {imageComponent}
export default Services