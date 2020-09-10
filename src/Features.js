import React from 'react'
import './Features.css'
import MinOrder from './images/minOrder.png';
import Tracking from './images/Tracking.png';
import Scooter from './images/scooter.png';
import Employee from './images/employee.png';

function Features() {
    return (
        <div className="features">
            <div className="features__heading">
                <h4>Why Choose Fresh Grocery</h4>
                <h2>Because we are in it together</h2>
            </div>
            <div className="features__products">
                <div className="features_individial__product">
                    <img src={MinOrder} />
                    <h4>No Minimum Order</h4>
                    <div className="content">
                        <p>No order value restrictions, Order 
                        for yourself or your group</p>
                    </div>
                </div>
                <div className="features_individial__product">
                    <img src={Tracking} />
                    <h4>Live Order Tracking</h4>
                    <div className="content">
                        <p>Track your order anytime from
                        the store to your doorstep</p>
                    </div>
                </div>
                <div className="features_individial__product">
                    <img src={Scooter} />
                    <h4>24 x 7 delivery</h4>
                    <div className="content">
                        <p>Order anytime, anywhere. We
                        will get you delivered</p>
                    </div>
                </div>
            </div>
            <div className="join">
                <div className="partner">
                    <h2>Become a partner and start earning!</h2>
                    <h3>You can login and logout whenever you want! No mandatory timings!</h3>
                    <button>
                        <h4>Become a partner</h4>
                    </button>
                </div>
                <div className="employee">
                    <img src={Employee} />
                </div>
            </div>
        </div>
    )
}

export default Features
