import React, { Component, useState } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

const Slider2 = () =>  {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
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
        <div className="slider-area">
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slider-height-2 d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider2.jpg'})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content">
                                        <h1 data-animation="fadeInUp" data-delay=".6s">
                                            Zomata Food Are <br/> Best For Health
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".8s">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                        </p>
                                        <div className="slider-button">
                                            <Link href="/services" as="/services" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    Our Services
                                                </a>
                                            </Link>
                                            <Link href="/contact" as="/contact" >
                                                <a data-animation="fadeInRight" data-delay="1s" className="btn active">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider">
                    <div className="slider-height-2  d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider2-2.jpg'})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content">
                                        <h1 data-animation="fadeInUp" data-delay=".6s">
                                            Zomata Food Are <br/> Best For Health
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".8s">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                        </p>
                                        <div className="slider-button">
                                            <Link href="/services" as="/services" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    Our Services
                                                </a>
                                            </Link>
                                            <Link href="/contact" as="/contact" >
                                                <a data-animation="fadeInRight" data-delay="1s" className="btn active">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Slider2;