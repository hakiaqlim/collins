import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className='container-fluid pb-0' style={{background:'#EFF9FF'}}>
        <div className="px-5 pt-5 mt-5 mb-5 ">
            <div className="row">
                <div className="col-lg-6">
                    <div className='d-flex flex-column gap-5'>
                        <ul className='d-flex list-unstyled gap-2'>
                            <div  className='d-flex align-items-center'>
                            <li style={{color:'#022F2E'}}>Home</li>
                          <IoIosArrowForward/>
                          </div>
                          <div  className='d-flex align-items-center'>
                            <li style={{color:'#022F2E'}}>Courses</li>
                            <IoIosArrowForward/>
                            </div>
                            <div>
                            <li> <strong className='accountability' style={{color:'#57C4F8'}}>Accountability in the Workplace</strong></li>
                            </div>
                        </ul>
                        <div className='d-flex flex-column gap-4'>
                            <h1><strong> Accountability in <br /> the Workplace </strong></h1>
                            <p>Courses that help beginner designers become true unicorns</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="https://br-collin.vercel.app/img/Hero/hero1.png" width='100%'  alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection