import React, { useRef } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegStar } from 'react-icons/fa'

const WorkplaceCourses = () => {
  const array = [1, 2, 3, 4, 5, 6]
  const scrollRef = useRef()

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' })
  }

  return (
    <div className='container-fluid'>
      <h4 className='fw-semibold px-3 mb-5'>All Accountability in the Workplace Courses</h4>
      <div className='row'>
        {/* Sidebar Filters */}
        <div className='col-lg-3 mb-3 col-md-12 px-5'>
          <h5>Filter By</h5>

          {/* Topic Categories */}
          <p>Topic Categories</p>
          <div className='d-flex flex-column gap-2'>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>Administrative Support</label>
            </div>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>Anger Management</label>
            </div>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>Business Writing Techniques</label>
            </div>
          </div>
          <a href='#'>Show more</a>
          <hr />

          {/* Language Filter */}
          <p>By Language</p>
          <div className='d-flex flex-column gap-2'>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>English</label>
            </div>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>Arabic</label>
            </div>
          </div>
          <hr />

          {/* Duration Filter */}
          <p>By Video Duration</p>
          <div className='d-flex flex-column gap-2'>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>0-1 Hour</label>
            </div>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>1-3 Hour</label>
            </div>
            <div className='d-flex gap-2'>
              <input type='checkbox' />
              <label>3-6 Hour</label>
            </div>
          </div>
          <a href='#'>Show more</a>
        </div>

        {/* Course Cards Section */}
        <div className='col-lg-9 col-md-12'>
          {/* Scrollable Section (optional: add arrows if needed) */}
          <div className='d-flex workplace align-items-center main-scroll flex-wrap gap-3' ref={scrollRef}>
            {array.map((item, index) => (
              <div className='card shadow-lg workplace' style={{ minWidth: '300px' }} key={index}>
                <div className='m-2 card-detail d-flex flex-column gap-1'>
                  <span
                    style={{ background: '#00A6F4' }}
                    className='border align-self-start rounded-1 px-2 py-1 text-white fw-bold'
                  >
                    1 Hour
                  </span>
                  <h5>The Power of Accountability</h5>
                  <div>
                    <img src='https://br-collin.vercel.app/img/Course/lession.svg' alt='Lessons icon' />
                    <span>10 Lessons</span>
                  </div>
                  <hr className='m-0' />
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
                    <a href='#'>View details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkplaceCourses
