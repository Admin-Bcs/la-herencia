import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Sidebar( {sidebarOpen, setSidebarOpen} ) {

    return (
        <div className={sidebarOpen ? "extra-info info-open" : "extra-info"}>
            <div className="close-icon">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i><FontAwesomeIcon icon={['far', 'window-close']}/></i>
                </button>
            </div>
            <div className="logo-side mb-30">
                <a href="#">
                    <img src={require("../../../../public/assets/img/logo/logo-white.png")} alt="logo"/>
                </a>
            </div>
            <div className="side-info mb-30">
                <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>
                        123/A, Miranda City Likaoli Prikano, Dope
                    </p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p>+0989 7876 9865 9</p>
                    <p>+(090) 8765 86543 85</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>example.mail@hum.com</p>
                </div>
            </div>
            <div className="instagram">
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery1.jpg")} alt="gallery"/>
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery2.jpg")} alt="gallery"/>
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery3.jpg")} alt="gallery"/>
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery4.jpg")} alt="gallery"/>
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery5.jpg")} alt="gallery"/>
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery6.jpg")} alt="gallery"/>
                </a>
            </div>
            <div className="social-icon-right mt-20">
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i>
                </a>
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'twitter']}/></i>
                </a>
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'google-plus-g']}/></i>
                </a>
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'instagram']}/></i>
                </a>
            </div>
        </div>
    )
}
