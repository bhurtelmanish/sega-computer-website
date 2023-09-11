import React from 'react'
import Landingpage from './homepage/Landingpage'
import Testimonials from './homepage/Testimonials'
import Instructors from './homepage/Instructors'
import Message from './homepage/Message'
import WhyUs from './homepage/WhyUs'
import Story from './homepage/Story'
import Services from './homepage/Services'

const Homepage = () => {
  return (
    <>
     <Landingpage />
     <Instructors />
     <Services />
     <Story />
     <WhyUs />

     <Testimonials />
     <Message />
    </>
  )
}

export default Homepage