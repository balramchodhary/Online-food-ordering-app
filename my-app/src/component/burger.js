import { Link } from 'react-router-dom'
import React from 'react'
import Style from './burger.css'
import Img1 from './burger1.jpg';
import Img2 from './burger2.jpg';
import Img3 from './burger3.jpg';
export default function burger() {
    return (
        <div>
            <div id="div1" style={Style}>


                <div className="card " id="div3">
                    <div><img src={Img1} alt="sorry" /></div>
                    <div className="card-body">
                        <h5 className="card-title">rates for double cheese burger $4</h5>
                        <p className="card-text"></p>
                        <Link to="/demo" className="btn btn-primary">order Now</Link>
                    </div>

                </div>

                <div className="card " id="div3">
                    <div><img src={Img2} alt="sorry" /></div>
                    <div className="card-body">
                        <h5 className="card-title">rates for cheese burger $2</h5>
                        <p className="card-text"></p>
                        <Link to="/demo" className="btn btn-primary">order Now</Link>
                    </div>

                </div>

                <div className="card " id="div3">
                    <div><img src={Img3} alt="sorry" /></div>
                    <div className="card-body">
                        <h5 className="card-title">rates for meat burger $1</h5>
                        <p className="card-text"></p>
                        <Link to="/demo" className="btn btn-primary">order Now</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
