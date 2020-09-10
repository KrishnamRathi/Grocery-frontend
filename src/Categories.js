import React from 'react';
import './Categories.css';
import Grocery from './images/1.png';
import Veg from './images/2.png';
import Care from './images/3.png';
import Home from './images/4.png';
import Bev from './images/5.png';

function Categories() {
    return (
        <div className="categories">
            <div className="heading">
                <h4>Here's what you need</h4>
                <h2>Quick Searches</h2>
            </div>
            <div className="products">
                <div className="individial__product">
                    <img src={Grocery} />
                    <h5>Grocery and Staples</h5>
                </div>
                <div className="individial__product">
                    <img src={Veg} />
                    <h5>Vegetables and Fruits</h5>
                </div>
                <div className="individial__product">
                    <img src={Care} />
                    <h5>Personal Care</h5>
                </div>
                <div className="individial__product">
                    <img src={Home} />
                    <h5>Personal Cares</h5>
                </div>
                <div className="individial__product">
                    <img src={Bev} />
                    <h5>Beverages</h5>
                </div>
            </div>
            <div className="button__outer">
                <button className="button">
                    <h4>Explore More</h4>
                </button>
            </div>
        </div>
    )
}

export default Categories
