import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet  } from "react-router-dom";
import Portfolio from '../Portoflio/Portfolio';

export default function Layout() {
 
   
   
  
  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
  }
