import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClientSlider = () => {

    function ClientNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function ClientPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const clientSettings = {
        className: "testimonial-active",
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        nextArrow: <ClientNextArrow />,
        prevArrow: <ClientPrevArrow />,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="our-client-area pt-110 pb-120" style={{ backgroundImage:`url(${'assets/img/bg/bg4.jpg'})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <img src={require("../../../../public/assets/img/shape/1.png")} alt="shape"/>
                            </div>
                            <h1>Zomata Farmer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
                                labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="client-active">
                            <Slider {...clientSettings}>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-wrapper">
                                    <div className="client-content">
                                        <p>Lorem ipsum dolor amet consect etur adipisicing was elit sed do eiusmod tempor incididunt
                                            ut labore ethers dolore
                                            magna aliqua. Ut enim ad minim veniam feels quis nostrud exercitation ullamco
                                            laboris.</p>
                                        <div className="client-name">
                                            <div className="client-img">
                                                <img src={require("../../../../public/assets/img/testimonial/1.png")} alt=""/>
                                            </div>
                                            <div className="client-text">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSlider;