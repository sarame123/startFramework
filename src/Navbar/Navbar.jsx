import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import {Link,NavLink} from "react-router-dom"
import $ from 'jquery';
export default function Navbar() { 
  const  animate=()=>{
      if (window.scrollY > 50) {
        $('nav').css({height:"160px"});
    }
    else {
        $('nav').css({height:"130px"});
    }
    }
    
  window.addEventListener("scroll",animate)
  return (   
   <>
   <nav id={style.yell} className="navbar navbar-expand-lg p-4">
  <div className="container">
    <Link id={style.logo} className="navbar-brand text-uppercase " href="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <NavLink id={style.colorlink}   className={({ isActive }) => (isActive ? "link-active" : "link")}  to="/about">ABOUT</NavLink>
        <NavLink id={style.colorlink}   className={({ isActive }) => (isActive ? "link-active" : "link")} to="/portofolio">PORTFOLIO</NavLink>
        <NavLink id={style.colorlink}className={({isActive})=>(isActive?"link-active":"link")} to="/contact">contact</NavLink>
      </div>
    </div>
  </div>
</nav>

   </>
  )
}
