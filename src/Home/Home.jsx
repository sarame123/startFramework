import React from 'react'
import logo  from '../assets/images/avataaars.svg'
export default function Home() {
  return (
    <>
     <div className=" " style={{ backgroundColor: "#49C7B7" }} >
       <div className="container text-center pt-4" style={{paddingBottom: "50px" }}>
       <img src={logo} alt=""  className='w-25'/>
       <h3 className='text-upercase text-white mt-3' style={{ fontSize: "40px",
    lineHeight: "48px",
    fontWeight: "700"}}>START FRAMEWORK</h3>
        <div className='star'>
            <i className='fa fa-star'></i>
        </div>
        <div className='text-white mt-3 fs'>Graphic Artist - Web Designer - Illustrator</div>
       </div>
     </div>
    </>
  )
}
