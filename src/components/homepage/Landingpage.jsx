import React from 'react'
import '../../App.css'
import '../../index.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import landing1 from '../../images/landing1.jpeg';
import landing2 from '../../images/landing2.jpg';
import landing3 from '../../images/landing3.jpeg';
import landing4 from '../../images/landing4.jpg';
import landing5 from '../../images/landing5.png';
import landing6 from '../../images/landing6.png';
import landing7 from '../../images/design.jpg';
import landing8 from '../../images/teaching.jpg';

const Landingpage = () => {
  return (
    <>
    <div className='h-auto w-screen flex flex-col lg:flex-row lg:py-10  lg:px-10 gap-4 xl:px-8 xl:gap-0 justify-center 2xl:px-32 mb-10'>
     <div className='w-[23rem] m-auto px-6 lg:px-0 flex flex-col  sm:w-[30rem] md:w-[38rem] py-16  lg:items-start lg:py-24 lg:w-[45rem] xl:w-[60rem]'>
         <p className='font-bold leading-10 mb-3 text-[2.5rem] sm:text-[2.7rem] lg:text-5xl'>SEGA Computer Link</p>
         <div className='flex items-center gap-2 font-semibold text-xl mt-1 sm:text-[1.4rem]  lg:mt-2 lg:text-[1.4rem]'>"The pathway to your Computer education"</div>
         <p className='lg:text-left  lg:text-sm text-sm leading-5 mt-4 font-light sm:text-[0.93rem] xl:w-[28rem]'>Being awarded by CAN federation, Kaski, we offer you the best<b className='font-medium'>Computer Courses</b> in Pokhara at <b className='font-medium'>SEGA Computer Link</b>located in Amarsingh-14, Pokhara </p>
         <button className='hover:bg-blue-700 bg-[var(--buttonColor)] mt-6 text-white font-medium links text-base z-[100] cursor-pointer w-fit px-5 h-12 flex items-center rounded-xl sm:text-base sm:px-5 lg:px-6'>Know More</button>
     </div>


     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=' bg-gray-100 w-11/12 m-auto  flex items-center justify-center h-[36rem] sm:h-[39rem] md:h-[41rem] flex-col gap-4 pt-11 pb-6 rounded-3xl md:pt-16 lg:w-full lg:h-[34rem] lg:pt-8 lg:px-6 xl:w-[53rem]' >
          <p className='font-bold text-4xl text-gray-800 mb-2'>Endless Learning</p>

          <div className='flex flex-col w-full items-center md:flex-row lg:gap-2'>
            <div className='w-full h-auto flex flex-col items-center gap-6 lg:gap-3 '>
          <div className='image-container px-2 py-2 w-72 sm:w-9/12 sm:h-56  md:w-11/12 rounded-2xl h-40 lg:h-40 lg:w-[16rem] cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
            <img src={landing1} alt="Landing Image 1" className='rounded-2xl'/>
          </div>
          <div className='mb-10 image-container px-2 py-2 w-72 sm:w-9/12 sm:h-56 md:w-11/12 rounded-2xl h-40 lg:h-40 lg:w-[16rem] cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
             <img src={landing2} alt="Landing Image 1" className='rounded-2xl'/> 
          </div>
          </div>

          <div className='flex flex-col w-full items-center second-section gap-6 lg:gap-3 justify-center'>
          <div className='image-container px-2 py-2 w-96 sm:w-9/12 sm:h-56 md:w-11/12  rounded-2xl h-48 cursor-pointer lg:w-[16rem] lg:h-40 xl:w-[23rem] xl:h-[12rem] '>
            <img src={landing3} alt="Landing Image 1" className='rounded-2xl'/>
          </div>
          <div className='mb-10 image-container px-2 py-2 w-96 sm:w-9/12 sm:h-56 md:w-11/12  rounded-2xl h-48  lg:w-[16rem] lg:h-40 cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
             <img src={landing4} alt="Landing Image 1" className='rounded-2xl'/> 
          </div>
          </div>
          </div>
        </div>
        </SwiperSlide>  


        <SwiperSlide>
        <div className=' bg-gray-100 w-11/12 m-auto  flex items-center justify-center h-[36rem] sm:h-[39rem] md:h-[41rem] flex-col gap-4 pt-11 pb-6 rounded-3xl md:pt-16 lg:w-full lg:h-[34rem] lg:pt-8 lg:px-6 xl:w-[53rem]' >
          <p className='font-bold text-4xl text-gray-800 mb-2'>Build Projects</p>

          <div className='flex flex-col w-full items-center md:flex-row lg:gap-2'>
            <div className='w-full h-auto flex flex-col items-center gap-6 lg:gap-3 '>
          <div className='image-container px-2 py-2 w-72 sm:w-9/12 sm:h-56  md:w-11/12 rounded-2xl h-40 lg:h-40 lg:w-[16rem] cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
            <img src={landing5} alt="Landing Image 1" className='rounded-2xl'/>
          </div>
          <div className='mb-10 image-container px-2 py-2 w-72 sm:w-9/12 sm:h-56 md:w-11/12 rounded-2xl h-40 lg:h-40 lg:w-[16rem] cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
             <img src={landing6} alt="Landing Image 1" className='rounded-2xl'/> 
          </div>
          </div>

          <div className='flex flex-col w-full items-center second-section gap-6 lg:gap-3 justify-center'>
          <div className='image-container px-2 py-2 w-96 sm:w-9/12 sm:h-56 md:w-11/12  rounded-2xl h-48 cursor-pointer lg:w-[16rem] lg:h-40 xl:w-[23rem] xl:h-[12rem] '>
            <img src={landing7} alt="Landing Image 1" className='rounded-2xl'/>
          </div>
          <div className='mb-10 image-container px-2 py-2 w-96 sm:w-9/12 sm:h-56 md:w-11/12  rounded-2xl h-48  lg:w-[16rem] lg:h-40 cursor-pointer xl:w-[23rem] xl:h-[12rem]'>
             <img src={landing8} alt="Landing Image 1" className='rounded-2xl'/> 
          </div>
          </div>
          </div>
        </div>
        </SwiperSlide>  


        <SwiperSlide>
          {/* <div className='bg-gray-100 w-11/12 m-auto  flex items-center justify-center h-auto flex-col gap-4 pt-11 pb-6 rounded-3xl'>
          <p className='font-bold text-4xl text-gray-800 mb-2'>Team Collaboration</p>
          <div className='image-container px-2 py-2 w-96 rounded-2xl h-48 cursor-pointer'>
            <img src={landing5} alt="Landing Image 1" className='rounded-2xl'/>
          </div>
          <div className='mb-10 image-container px-2 py-2 w-96 rounded-2xl h-48 cursor-pointer'>
            <img src={landing6} alt="Landing Image 1" className='rounded-2xl'/> 
          </div>
          </div> */}
          <div className=' bg-gray-100 w-11/12 m-auto  px-2 flex items-center justify-center h-[36rem] sm:h-[39rem] md:h-[41rem] flex-col gap-4 pt-11 pb-6 rounded-3xl md:pt-16 lg:w-full lg:h-[34rem] lg:pt-8 lg:px-6 xl:w-[53rem]' >
          <p className='font-bold text-4xl text-gray-800 mb-2'>We are here for you</p>
          <button className='bg-[var(--buttonColor)] mt-6 text-white font-medium links text-lg py-7 z-[100] cursor-pointer w-fit px-8 h-12 flex items-center rounded-xl hover:bg-blue-700  sm:text-base sm:px-8'>Call us Now</button>
          </div>
        </SwiperSlide>  
        
      </Swiper>



      </div>
    </>
  )
}

export default Landingpage