import React, { useState, useEffect } from 'react'
import style from './Portfolio.module.css'
import photo1 from '../assets/images/poert1.png'
import photo2 from '../assets/images/port2.png'
import photo3 from '../assets/images/port3.png'

export default function Portfolio() {
 const[show,setShow]=useState(false)
  const [imgs, setImagges] = useState([
    { src: photo1 },
    { src: photo2 },
    { src: photo3 },
    { src: photo1 },
    { src: photo2 },
    { src: photo3 }

  ])
  

  function displayImage(id) {
    let imgContainer=document.querySelector('.imgContainer');
    let imgItem=document.getElementById('imgItem');
   imgContainer.style.display="block"
   imgItem.style.display="block";
   imgItem.style.backgroundImage=`url(${imgs[id].src})`;
   let close=document.getElementById('close');
   close.addEventListener("click",()=>{
    imgContainer.style.display="none"
   imgItem.style.display="none";
   })
  }  
  
  return (
    <>


      <div className="" style={{ backgroundColor: "#49C7B7" }} >
        <div className="container text-center pt-5 pb-5 " >
          <h2 className='fs-1 fw-bolder mb-3' style={{
            LineHeight: "48px"
          }}> PORTFOLIO COMPONENT</h2>
          <div className='star mb-3'>
            <i className='fa fa-star'></i>
          </div>
          <div className="row mt-5 gy-4">
          <div id={style.imgContainer} className='imgContainer ' >
              <div className={` ${style.imgItem} position-relative col-md-4`} id='imgItem'>
              <i className='fa fa-close   fa-2x  text-white position-absolute p-4 top-0 end-0'id='close' ></i>
              </div>
            </div>
            {imgs.map((img, index) => <div className="col-md-4 position-relative " key={index}
              onClick={() => displayImage(index)}>
              <div className="img " id="item">
                <img src={img.src} alt="" className='w-100 rounded-4' />
              </div>
              <div className="layer d-flex text-white rounded-4">
                <i className='fa fa-plus text-center fa-5x'></i>
              </div>
            </div>)}
            
          </div>

        </div>
      </div>




    </>
  )
}
