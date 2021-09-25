import React from 'react'
import { Link } from 'react-router-dom'
import Style from './pizza.css';
import Img1 from './piza1.jpg';
import Img2 from './piza2.jpg';
import Img3 from './piza3.jpg';
export default function pizza() {
    return (
        <div id="div1" style={Style}>


            <div className="card " id="div3">
                <div><img src={Img1} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for pizza $6</h5>
                    <p className="card-text"></p>
                    <Link to="/demo" className="btn btn-primary">order Now</Link>
                </div>

            </div>

            <div className="card " id="div3">
                <div><img src={Img2} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for pizza $5</h5>
                    <p className="card-text"></p>
                    <Link to="/demo" className="btn btn-primary">order Now</Link>
                </div>

            </div>

            <div className="card " id="div3">
                <div><img src={Img3} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for pizza $3</h5>
                    <p className="card-text"></p>
                    <Link to="/demo" className="btn btn-primary">order Now</Link>
                </div>

            </div>

        </div>
    )
}
