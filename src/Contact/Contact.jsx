import React from 'react'
import style from '../Contact/Contact.module.css'
export default function Contact() {
    return (
        <>
            <div className=""  >
                <div className="container  pt-5 pb-5 " >
                    <h2 className='fs-1 fw-bolder text-dark mb-3 text-center' style={{
                        LineHeight: "48px",
                        color: "#2C3E50"
                    }}> CONATCT SECTION</h2>
                    <div className={style.contactStar} >
                        <i className='fa fa-star'></i>
                    </div>
                    <form action="#" className="form">
                        <input type="text" className="form-control mb-5" name="name" id="name" placeholder='userName' />
                        <input type="number" className="form-control mb-5" name="age" id="age" placeholder='userAge' />
                        <input type="email" className="form-control mb-5" name="email" id="email" placeholder='userEmail' />
                        <input type="password" className="form-control mb-5" name="pass" id="pass" placeholder='userPassword' />

                        <button className="btn btn-primary " >Send Message</button>

                    </form>
                </div>
            </div>
        </>
    )
}
