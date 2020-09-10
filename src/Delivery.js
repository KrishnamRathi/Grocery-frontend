import React from 'react'
import './Delivery.css';
import Step1 from './images/step1.png';
import Step2 from './images/step2.png';
import Step3 from './images/step3.png';
import S1 from './images/s1.png';
import S2 from './images/s2.png';
import S3 from './images/s3.png';
import Apple from './images/apple.png';
import Google from './images/google.png'


function Delivery() {
    return (
        <div className="delivery">
            <div className="heading">
                <h4>Get delivered in 3 easy steps</h4>
                <h2>Here’s how it works</h2>
            </div>
            <div className="step1">
                <img src={Step1} className="step__img" />
                <div className="title">
                    <img src={S1} />
                    <h2>Request in the app</h2>
                </div>
                <h4>Set your delivery location, Choose your groceries from a wide range of 5000+ products.</h4>
                <div className="store__img">
                    <img src={Apple} />
                    <img src={Google} />
                </div>
            </div>
            <div className="step2">
                <div className="content">
                    <div className="title">
                        <img src={S2} />
                        <h2>Schedule and Pay</h2>
                    </div>
                    <h4>Schedule the delivery at your convenient time and pay digitally.</h4>
                </div>
                <img src={Step2} className="step__img" />
            </div>
            <div className="step3">
                <img src={Step3} className="step__img" />
                <div className="content">
                    <div className="title">
                        <img src={S3} />
                        <h2>It’s delivered and Rate us</h2>
                    </div>
                    <h4>Collect groceries at your doorstep and tell us about our service</h4>
                </div>
            </div>
        </div>
    )
}

export default Delivery
