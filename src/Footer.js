import React from 'react'
import './Footer.css'
import Logo from './images/Logo.png'
import Yt from './images/yt.png';
import Fb from './images/fb.png';
import Twitter from './images/twitter.png';
import Insta from './images/insta.png';
import Apple from './images/apple.png';
import Google from './images/google.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="col1">
                    <img src={Logo} />
                    <p>Help Center</p>
                    <p>English (International)</p>
                    <img src={Apple} />
                    <img src={Google} />
                </div>
                <div className="col2">
                    <h3>About us</h3>
                    <p>My Account</p>
                    <p>Categories</p>
                    <p>Cities</p>
                    <p>Become a Partner</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
                <div className="col3">
                    <h3>Questions ?</h3>
                    <p>Frequently asked questions</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <hr/>
            <div className="footer_bottom">
                <div className="bcol1">
                    <p>© 2020 Appening Infotech Pvt Ltd</p>
                </div>
                <div className="bcol2">
                    <p>Privacy</p>
                    <p>Accessibility</p>
                    <p>Terms</p>
                </div>
                <div className="bcol3">
                    <img src={Insta} />
                    <img src={Fb} />
                    <img src={Twitter} />
                    <img src={Yt} />
                </div>
            </div>
        </div>
    )
}

export default Footer
