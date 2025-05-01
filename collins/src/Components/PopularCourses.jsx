import React, { useRef } from 'react'
import { FaArrowAltCircleRight, FaRegStar } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PopularCourses = () => {
  const array = [1, 2, 3, 4, 5, 6, 7]
  const scrollRef = useRef()

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" })
  }

  return (
    <div className='container-fluid px-5 mt-5 mb-5 d-flex flex-column gap-3'>
      <h4 className='fw-semibold'>Most Popular Courses</h4>
      <p>Explore courses from experienced, real-world experts.</p>

      <div className='d-flex gap-3'>
        <span className='fw-semibold '>E-learning</span>
        <span>In-person</span>
      </div>

      <hr />
      <div className='d-flex main align-items-center'>

        <div className='cursor-pointer '>
          <FaArrowAltCircleLeft size={35} onClick={scrollLeft} />
        </div>
        <div ref={scrollRef} className="d-flex align-items-center main-scroll overflow-auto flex-nowrap gap-3">
          {array.map((item, index) => (


            <div className="card workplace-card shadow-lg sm:max-width-[350px]" style={{ minWidth: '350px' }} key={index}>
              <div className='m-3 card-detail d-flex flex-column gap-2'>
                <span style={{ background: '#00A6F4' }} className='border align-self-start rounded-1 px-2 py-1 text-white fw-bold'>1 Hour</span>
                <h5 className='fw-bold'>The Power of Accountability</h5>
                <div>
                  <img src="https://br-collin.vercel.app/img/Course/lession.svg" alt="" />
                  <span>10 Lessons</span>
                </div>
                <hr/>
                <div className='d-flex gap-1 align-items-center'>
                  <p className='m-0'>4.9</p>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
                </div>
                <div className='d-flex gap-2'>
                  <p>$149.00</p>
                  <del style={{ color: '#AFAFAF' }}>$180.00</del>
                </div>
                <div className='text-center'>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div onClick={scrollRight}>
          <FaArrowAltCircleRight size={35} />
        </div>
      </div>
    </div>
  )
}

export default PopularCourses
