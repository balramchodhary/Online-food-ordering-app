import React from 'react'
import { Link } from 'react-router-dom'
import Img from './piza1.jpg';
import Img1 from './burger1.jpg';
import Img2 from './coffee1.jpg'
import Style from './Home.css'

export default function Home() {
    

    return (
        <div id="div1" style={Style}>
            <div className="card " id="div3">
                <div><img src={Img} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for pizza $6-10</h5>
                    <p className="card-text"></p>
                    <Link to="/pizza" className="btn btn-primary">see all</Link>
                </div>

            </div>

            <div className="card " id="div3">
                <div><img src={Img1} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for burger $3-5</h5>
                    <p className="card-text"></p>
                    <Link to="/burger" className="btn btn-primary">see all</Link>
                </div>

            </div>

            <div className="card " id="div3">
                <div><img src={Img2} alt="sorry" /></div>
                <div className="card-body">
                    <h5 className="card-title">rates for coffee $1</h5>
                    <p className="card-text"></p>
                    <Link to="/demo" className="btn btn-primary">Order now</Link>
                </div>

            </div>

        </div>
    )
}
