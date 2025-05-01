import React from 'react'
import { FaRegStar } from "react-icons/fa";

const FeaturedCourses = () => {
    return (
        <div className='container-fluid mb-5'>
            <div className='px-5 '>
                <div className="row card-featur">
                <h4 className='fw-semibold'>Featured Courses</h4>
                <p>Many learners enjoyed this highly rated courses for its engaging content.</p>
                    <div className="col-lg-6">
                    
                        <div className="card shadow-lg   border-0 rounded-3">
                            <div className='d-flex '>
                            <div className="col-lg-5 " style={{objectFit:'cover'}}>
                                <img width="100%"  src="https://br-collin.vercel.app/img/Course/Course.png" height='100%' alt="" />
                            </div>
                            <div className="col-lg-7 ">
                                <div className='m-3 d-flex flex-column gap-2'>
                                    <span style={{background:'#00A6F4'}} className='border align-self-start rounded-1 px-2 py-1 text-white fw-bold'>1 Hour</span>
                                    <h5 className='fw-bold'>The Power of Accountability</h5>
                                    <div>
                                        <img src="https://br-collin.vercel.app/img/Course/lession.svg" alt="" />
                                        <span>10 Lessons</span>
                                    </div>
                                    <hr />
                                    <div className='d-flex gap-1 align-items-center'>
                                        <p className='m-0'>4.9</p>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <FaRegStar />
                                        ))}
                                    </div>
                                    <div className='d-flex gap-2'>
                                    <p>$149.00</p>
                                    <del style={{color:'#AFAFAF'}}>$180.00</del>
                                    </div>
                                    <div className='text-center'>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0">
                            <div className='d-flex '>
                            <div className="col-lg-5 " style={{objectFit:'cover'}}>
                                <img width="100%" src="https://br-collin.vercel.app/img/Course/Course2.png" height='100%' alt="" />
                            </div>
                            <div className="col-lg-7 ">
                                <div className='m-3 d-flex flex-column gap-2'>
                                    <span style={{background:'#00A6F4'}} className='border align-self-start rounded-1 px-2 py-1 text-white fw-bold'>1 Hour</span>
                                    <h5 className='fw-bold'>The Power of Accountability</h5>
                                    <div>
                                        <img src="https://br-collin.vercel.app/img/Course/lession.svg" alt="" />
                                        <span>10 Lessons</span>
                                    </div>
                                    <hr />
                                    <div className='d-flex gap-1 align-items-center'>
                                        <p className='m-0'>4.9</p>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <FaRegStar />
                                        ))}
                                    </div>
                                    <div className='d-flex gap-2'>
                                    <p>$149.00</p>
                                    <del style={{color:'#AFAFAF'}}>$180.00</del>
                                    </div>
                                    <div className='text-center'>
                                        <a href="#">View details</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses