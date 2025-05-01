import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [cross, setCross] = useState(false)
  return (
    <>
      {!cross &&
        <div style={{ background: "#0084D1" }} className=" d-flex w-100 text-white justify-content-between align-items-center px-5 py-2 header">
          <div
            className="d-flex header-main align-items-center  "
            style={{ color: "#FFFFFF" }}
          >
            <strong> Courses from $149.00 </strong>
            <p className="m-0" style={{ color: "#F2F9FD" }}>
            
              Gain the skills to climb that career ladder.
            </p>
            <span style={{ color: "#FFCA7E" }}>3 days left!</span>
          </div>
          <RxCross2  onClick={()=> setCross(true)} cursor='pointer'/>
        </div>
    }
    </>
  );
}

export default Header