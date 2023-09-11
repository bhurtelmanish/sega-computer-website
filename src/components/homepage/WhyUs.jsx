import React from 'react'
import trophy from '../../images/trophy.png'
import laptop from '../../images/laptop.png'
import experience from '../../images/experience.png'
import typing from '../../images/typing.png'
import quiz from '../../images/quiz.png'
import exam from '../../images/exam.png'

const WhyUs = () => {
  return (
    <>
     <div className='h-auto w-screen mt-10 py-6 flex px-8 flex-col mb-10'>
        <div className="mb-8 mt-8 text-left">
            <h2 className="mb-4  text-2xl text-gray-900 font-bold md:text-4xl text-center">Why choose us?</h2>
            <p className="text-gray-600 lg:w-8/12 xl:w-6/12 lg:text-center lg:mx-auto text-center sm:w-10/12 sm:mx-auto ">Not only students can learn in peaceful and friendly environment but also there is use of projector while teaching to enhance their level of understanding. </p>
        </div>

        <div className='flex flex-wrap items-center h-auto justify-center gap-3 lg:gap-5 max-w-[60rem] mx-auto'>
            <WhyUsCard img={experience} title="17 years of experience" />
            <WhyUsCard img={trophy} title="Awarded as best Institute" />
            <WhyUsCard img={laptop} title="Use of Laptops" />
            <WhyUsCard img={typing} title="Typing Competition Winner(2017)" />
            <WhyUsCard img={quiz} title="Quiz Competition Winner(2015-2019)" />
            <WhyUsCard img={exam} title="Chapter Wise Exams" />
        </div>
     </div>
    </>
  )
}

const WhyUsCard = ({img , title}) =>{
    return (
        <>
         <div className='bg-white cursor-pointer rounded-xl flex flex-col px-4 h-[10rem] justify-center items-center w-[18rem] gap-1 sm:h-[11rem] sm:w-[19rem] hover:scale-105 transition-transform'>
            <img src={img} alt="Trophy" className='h-12 w-12' />
            <h4 className="text-center text-[1.2rem] ">{title}</h4>
         </div>
        </>
    )
}

export {WhyUsCard}
export default WhyUs