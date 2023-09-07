import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Courses from './components/Courses'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
       <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/courses' element={<Courses />} />
         <Route path='/quiz' element={<Quiz />} />
         <Route path='/contact' element={<Contact />} />
       </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </>
  )
}

export default App