import React from 'react'
import { Link } from 'react-router-dom'
const divStyle = { 
    color: 'black '
  };

export default function footer() {
    return (
        <div>

            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block"> <span>Get connection with Online Food networks:</span></div>
                    <div>
                        <Link to="facebook.com" className="me-4 text-reset">
                            <i className="fa fa-facebook-f"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fa fa-twitter"></i>
                        </Link>
                        
                        <Link to="" className="me-4 text-reset">
                            <i className="fa fa-instagram"></i>
                        </Link>
                        
                        <Link to="" className="me-4 text-reset">
                        <i className="fa fa-github"></i>
                        </Link>
                    </div>

                </section>


                <section className="">
                    <div className="container text-center text-md-start mt-5"><div className="row mt-3">

                        < div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name </h6>
                            <p>Online Food market</p>
                        </div>
                        

                        

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
          </h6>
                            <p><i className="fa fa-home me-3"></i>Rajasthan,India</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>balramchoudhary314@gmail.com
          </p>
                            <p><i className="fa fa-phone me-3"></i> + 72 404 379 53</p>
                            <p><i className="fa fa-phone me-3"></i> + 91 168 937 78</p>
                        </div>

                    </div>

                    </div>
                </section>



                <div class="text-center p-3" style={divStyle}>
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
            </footer>

        </div>
    )
}
