import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container-fulid ">

                <footer className="text-white text-center ">

                    <div className=" p-5" style={{ backgroundColor: "#2C3E50" }}  >
                        <div className="container ">

                        <div className="row mt-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h3 className="text-uppercase mb-1">LOCATION</h3>

                                <p>
                                    2215 John Daniel Drive </p>

                                <p className='mt-3'>
                                    Clark, MO 65243
                                </p>


                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                                <h3>AROUND THE WEB</h3>
                                <div className="mt-4  ">

                                    <a type="button" style={{ color:"white" }} className="btn btn-floating  border-1 border-white btn-md rounded-circle m-1"><i className="fab fa-facebook-f"></i></a>

                                    <a type="button" style={{ color:"white" }} className="btn btn-floating  border-1 border-white btn-md rounded-circle m-1"><i className="fab fa-twitter"></i></a>

                                    <a type="button" style={{ color:"white" }} className="btn btn-floating  border-1 border-white btn-md rounded-circle m-1"><i className="fab fa-linkedin"></i></a>

                                    <a type="button" style={{ color:"white" }} className="btn btn-floating  border-1 border-white btn-md rounded-circle m-1"><i  className="fa-solid fa-globe mx-1 icon"></i></a>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">ABOUT FREELANCER</h5>

                               <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>

                        </div>
                        </div>

                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: "#1A252F" }}>

                       <p>Copyright © Your Website 2021</p>
                    </div>

                </footer>

            </div>

        </>
    )
}
