import React from 'react'
import Illu from './images/illu.png';
import './Hygene.css';
import Tick from './images/Tick.png';

function Hygene() {

    const rules = ["Zero touch delivery", "Regular cleaning of warehouses", "Fever screening of all executives"]

    return (
        <div className="hygene">
            <div className="hygene__up">
                <div className="heading">
                    <h4>#GroceryDeliveredSafely</h4>
                    <h1>Hygenically <br/>
                        Packed, <br/>
                        Safely Delivered
                    </h1>
                    <button className="hygene__button">
                        <h4>Learn More</h4>
                    </button>
                </div>
                <img src={Illu} />
            </div>
            <div className="hygene__down">
                {rules.map(rule => (
                    <div className="rule__box">
                        <img src={Tick}/>
                        <h4>{rule}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hygene
