import React from 'react'
import Header from '../../Components/Header.jsx'
import Navbar from '../../Components/Navbar.jsx'
import Sidebar from '../../Components/Sidebar.jsx'
import HeroSection from '../../Components/HeroSection.jsx'
import FeaturedCourses from '../../Components/FeaturedCourses.jsx'
import PopularCourses from '../../Components/PopularCourses.jsx'
import WorkplaceCourses from '../../Components/WorkplaceCourses.jsx'
import Footer from '../../Components/Footer.jsx'
const Home = () => {
  return (
    <div className=''>

      <Header />
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <PopularCourses />
      <WorkplaceCourses/>
      <Footer/>
    </div>
  )
}

export default Home