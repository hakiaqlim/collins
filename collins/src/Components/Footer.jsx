import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='container-fluid mt-5 ' style={{ background: '#B8E5D9' }}>
            <div className='p-5  w-100'>
                <div className='row '>
                    <div className="col-lg-6">
                        <div className="d-flex gap-5" >
                            <div>
                                <h5 className='fw-semibold'>Quick Links</h5>
                                <ul style={{color:'#65707F'}} className='list-unstyled d-flex flex-column gap-1'>
                                    <li>Courses</li>
                                    <li>Subscription</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Login & Register </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='fw-semibold'>Get Contact</h5>
                                <p><strong>(406) 555-0120</strong></p>
                                <p style={{color:'#65707F'}}>b.r.collins@example.com</p>
                                <div className='d-flex align-items-center'>
                                    <CiLocationOn />
                                    <p style={{color:'#65707F'}} className='m-0'>North America, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto">
                        <div className='d-flex flex-column gap-2 '>
                            <h5 className='fw-semibold mb-2'>Join the Comunity</h5>
                            <p style={{color:'#65707F'}} >2,000+ Students Globally-Connect & Say Hello!</p>
                            <div className='d-flex align-items-center gap-1'>
                               
                               <div className='rounded-5 w-75 bg-white py-2 border p-2'>
                                <input type="email" placeholder='Email Address' className=' outline-0 border-0'/>
                                </div> 
                                <FaLocationArrow size={30} className='text-white'/>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <img src="https://br-collin.vercel.app/_next/image?url=%2Fassets%2Flowerlogo.png&w=128&q=75" alt="" />
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='rounded p-1 bg-gray text-white '>

                        <FaFacebook  size={25}/>
                        </div>
                        <div className='rounded p-1 bg-gray text-white '>

                        <FaInstagramSquare  size={25}/>
                        </div>
                        <div className='rounded p-1 bg-gray text-white '>

                        <FaTwitter size={25} />
                        </div>
                        <div className='rounded p-1 bg-gray text-white '>

                        <CiLinkedin  size={25}/>
                        </div>
                    </div>

                </div>
                <hr />
                
                <div className='d-flex justify-content-between align-items-center'>
                <div className=' '>
                    <p  style={{fontSize:'13px',color:'#65707F'}}>Copyright © 2025 B.R. Collins All Rights Reserved <a href="#">Terms of service</a><a href="#">Privacy and policy</a></p> 
                </div>
                <div className=''>
                    <p style={{fontSize:'13px', color:'#65707F'}}>Design and Developed by  <a href="#"> Agency Partner Interactive</a></p>
                   
                </div>
                </div>

            </div>
        </div>
    )
}

export default Footer