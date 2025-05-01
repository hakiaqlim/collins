import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>    <div
      className=" px-5 py-3 d-flex justify-content-between align-items-center  "

    >
      <div className="d-flex gap-3 main-nav align-items-center">
        <div className='nav-img'>
          <img src="https://br-collin.vercel.app/img/logo.svg" alt="" />
        </div>
        <div className="d-flex search-section gap-2 align-items-center">
          <div
            className="border d-flex gap-2 align-items-center px-3 py-2 nav-search rounded-5"
            style={{ borderColor: "gray" }}
          >
            < CiSearch className='' />
            <form>
              <input
                type="text"
                placeholder="Search for anything"
                className="border-0"
              />
            </form>
          </div>
          <div className="border nav-option px-3 py-2 rounded-5">
            <select className="border-0">
              <option value="">Courses</option>
              <option value="">Courses1</option>
              <option value="">Courses2</option>
            </select>
          </div>
        </div>
      </div>
      <div >
        <ul className="d-flex nav-ul gap-5 m-0 align-items-center list-unstyled ">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className='d-flex align-items-center gap-1'>
        <TiShoppingCart className='' style={{ fontSize: '25' }} />
        <button className='rounded-4 nav-btn btn px-3 py-2 border bg-light' style={{ borderColor: 'gray' }}>Login</button>
      </div>
      <div>
        <MdMenu onClick={() => setMenuOpen(!menuOpen)} className='fs-2 d-none menu' />
      </div>
    </div>
      {menuOpen ? <Sidebar /> : <></>}

    </>

  );
}

export default Navbar