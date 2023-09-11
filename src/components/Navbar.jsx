import React, { useState , useEffect , useRef } from 'react'
import logo from '../images/logo.png'
import { FiChevronDown } from 'react-icons/fi'
import '../index.css'
import '../App.css'
import AboutDropdown from './dropdowns/AboutDropdown'
import QuizDropdown from './dropdowns/QuizDropdown'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isVisible , setisVisible] = useState(false);
  const [aboutMenu , setaboutMenu] = useState(false);
  const [quizMenu , setquizMenu] = useState(false);
  const [bars , setbars] = useState("fa-bars-staggared");
  const aboutRef = useRef();
  const quizRef = useRef();
  // This will change the icon to fa-xmark if it is fa-bars and vice versa &also open the box if it is closed and close the box if it is open
  const barsClicked = () =>{
    setisVisible(!isVisible);
    (bars === "fa-bars-staggared") ? setbars("fa-xmark") : setbars("fa-bars-staggared");
  }


  const aboutMenuClicked = () =>{
    setaboutMenu(!aboutMenu);
  }
  const quizMenuClicked = () =>{
    setquizMenu(!quizMenu);
  }
  useEffect(()=>{
    document.addEventListener('click', abouthandler , true);
    document.addEventListener('click', quizhandler , true);
  })

  const abouthandler = (e) =>{
    if(!aboutRef.current.contains(e.target)){
      setaboutMenu(false);
    }
  }

  const quizhandler = (e) =>{
    if(!quizRef.current.contains(e.target)){
      setquizMenu(false);
    }
  }
  return (
    <>
     <div className='relative text-[var(--blackColor)] flex  w-screen h-[var(--navHeight)] py-0 shadow-sm justify-between items-center px-6 md:px-16 sm:px-7 z-[300] sm:py-10 lg:px-24'>
      <div className='flex items-end gap-4'>
        <img src={logo} alt="Sega Computer Logo" className='h-10 sm:h-12 w-auto cursor-pointer' />
      </div>
        
        <ul className={`${isVisible ? 'active' : 'inactive'} z-[500] links-container bg-gray-100 w-screen top-16 min-h-fit absolute flex flex-col px-10 py-12 right-0 gap-4 sm:min-h-0 sm:bg-transparent sm:w-fit sm:flex-row sm:static sm:px-0 sm:py-0 sm:gap-0 md:gap-2 lg:gap-4`}>
          <li onClick={barsClicked}><Link to="/" className='font-medium links text-base z-[200] cursor-pointer w-fit h-10 flex px-2 items-center hover:text-blue-800 rounded-md sm:text-base sm:px-5 gap-1' >Home</Link></li>
          
          <li ref={aboutRef} onClick={aboutMenuClicked}  className='font-medium links text-base z-[200] cursor-pointer w-fit h-10 flex px-2 items-center hover:text-blue-800 rounded-md sm:text-base sm:px-5 relative'>
             About <FiChevronDown className='text-lg'/>
            <AboutDropdown isVisible={aboutMenu} click={barsClicked}/>
          </li>
          <li onClick={barsClicked} ><Link to='/Courses'  className='font-medium links text-base z-[200] cursor-pointer w-fit h-10 flex px-2 items-center hover:text-blue-800 rounded-md sm:text-base sm:px-5 gap-1'> Courses </Link></li>
          <li ref={quizRef} onClick={quizMenuClicked} className='font-medium links text-base z-[200] cursor-pointer w-fit h-10 flex px-2 items-center hover:text-blue-800 rounded-md sm:text-base sm:px-5 relative'>
           Quiz <FiChevronDown  className='text-lg'/>
            <QuizDropdown isVisible={quizMenu} click={barsClicked}/>
          </li>
          <Link to='/Contact' ><button onClick={barsClicked} className='bg-[var(--buttonColor)] text-white font-medium links text-base z-[100] cursor-pointer w-fit px-6 h-11 flex items-center hover:bg-blue-700 rounded-md sm:text-base sm:px-5'> Contact</button></Link>
        </ul>
        <i onClick={barsClicked} className={`${bars} fa-solid fa-bars-staggered cursor-pointer text-2xl  absolute right-6 sm:hidden`}> </i>
     </div>
    </>
  )
}

export default Navbar