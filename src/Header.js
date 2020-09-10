import React from 'react'
import './Header.css'
import Logo from './images/Logo.png'

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" />
            <div className="buttons">
                <button className="login__button button" >
                    <h4>Log In</h4>
                </button>
                <button className="signup__button button">
                    <h4>Sign Up</h4>
                </button>
            </div>
        </div>
    )
}

export default Header
