import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    return (
        <div className={sidebarOpen ? "extra-info info-open" : "extra-info"}>
            <div className="close-icon">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i><FontAwesomeIcon icon={['far', 'window-close']} /></i>
                </button>
            </div>
            <div className="logo-side mb-30">
                <a href="#">
                    <img className="retina-logo" src={require("../../../../public/assets/img/logo/laherencia/laherencia.png")} alt="logo" />
                </a>
            </div>
            <div className="side-info mb-30">
                <div className="contact-list mb-30">
                    <h4>Address</h4>
                    <p>
                        422 11th St.
                        Union City, NJ 07087
                    </p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p>201-223-6809</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p>services@laherenciaspices.com</p>
                </div>
            </div>
            {/* <div className="instagram">
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery1.jpg")} alt="gallery" />
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery2.jpg")} alt="gallery" />
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery3.jpg")} alt="gallery" />
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery4.jpg")} alt="gallery" />
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery5.jpg")} alt="gallery" />
                </a>
                <a href="#">
                    <img src={require("../../../../public/assets/img/gallery/gallery6.jpg")} alt="gallery" />
                </a>
            </div> */}
            <div className="social-icon-right mt-20">
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i>
                </a>
                <a href="https://www.instagram.com/laherenciaspices">
                    <i><FontAwesomeIcon icon={['fab', 'instagram']} /></i>
                </a>
                <a href="https://www.pinterest.com/Laherenciaspices/">
                    <i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i>
                </a>
            </div>
        </div>
    )
}
