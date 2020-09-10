import React from 'react'
import './Home.css'
import Location from './images/Location.png'

function Home() {

    const cities = ["NEW YORK", "SAN ANTONIO", "PHOENIX", "CHICAGO", "LOS ANGELES", "PHILADELPHIA"]

    return (
        <div className="home">
            <div className="home__heading">
                <h1>Stay Home-We'll Deliver</h1>
                <h3>Get your groceries delivered in less than an hour</h3>
                <div className="home__search">
                    <img src={Location} />
                    <input placeholder="Search for a location"/>
                    <button className="home__button">
                        <h4>Search</h4>
                    </button>
                </div>
                <div className="home__cities">
                        {cities.map(city => (
                            <h6>{city}</h6>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default Home
