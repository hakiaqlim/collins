import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [crossMenu, setCrossMenu] = useState(false)
  return(
    <>
    {!crossMenu &&
    <div className='d-flex flex-column gap-3 px-3'>
      <RxCross2 onClick={()=> setCrossMenu(true)} size={25} className='d-block mx-auto'/>
        <div className='border rounded-5 px-3 py-2'>
        <form>
            <input type="text" className='border-0' placeholder='Search for anything'/>
        </form>
        </div>
        <div className='border rounded-5 px-3 py-2'>
            <select className='border-0'>
                <option value="">Courses</option>
                <option value="">Courses1</option>
                <option value="">Courses2</option>
            </select>
        </div>
        <div className='px-2'>
            
        <p className='m-0'>Subscription</p>
        <p className='m-0'>About</p>
        <p className='m-0'>Contact Us</p>
        </div>
        <div className='border rounded-5 px-3 py-2 text-center'>

        <button className='border-0 bg-light'>Login</button>
        </div>

    </div>
    }
    </>
  )
}


export default Sidebar