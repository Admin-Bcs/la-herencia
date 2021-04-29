import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialsStyleTwo = () => {

    function TestiNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function TestiPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const testimonialSettings = {
        className: "testimonial-active",
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <TestiNextArrow />,
        prevArrow: <TestiPrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-area pt-110 pb-90">
			<div className="container">
				<div className="col-xl-6 col-lg-6 col-md-6">
					<div className="section-title section-circle">
						<div className="section-img">
                            <img src={require('../../../../public/assets/img/shape/1.png')} alt='shape' />
						</div>
						<h1>Clients Reviews</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-7 col-lg-7">
						<div className="testimonial-img mb-30">
                            <img src={require('../../../../public/assets/img/bg/01.jpg')} alt='bg' />
						</div>
					</div>
					<div className="col-xl-5 col-lg-5">
						<div className="testimonial-active">
                            <Slider {...testimonialSettings}>
                                <div className="testimonial-wrapper mb-30">
                                    <div className="testimonial-text">
                                        <p>Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers dolore magna aliqua. Ut enim minimveniam feelsquis nostrud exercitation ullamco laboris.</p>
                                        <div className="testimonial-content">
                                            <div className="testimonial2-img">
                                                <img src={require('../../../../public/assets/img/testimonial/3.png')} alt='testimonial' />
                                            </div>
                                            <div className="testimonial-name">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-wrapper mb-30">
                                    <div className="testimonial-text">
                                        <p>Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers dolore magna aliqua. Ut enim minimveniam feelsquis nostrud exercitation ullamco laboris.</p>
                                        <div className="testimonial-content">
                                            <div className="testimonial2-img">
                                                <img src={require('../../../../public/assets/img/testimonial/3.png')} alt='testimonial' />
                                            </div>
                                            <div className="testimonial-name">
                                                <h4>Sileen P. Willilams</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-wrapper mb-30">
                                    <div className="testimonial-text">
                                        <p>Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers dolore magna aliqua. Ut enim minimveniam feelsquis nostrud exercitation ullamco laboris.</p>
                                        <div className="testimonial-content">
                                            <div className="testimonial2-img">
                                                <img src={require('../../../../public/assets/img/testimonial/3.png')} alt='testimonial' />
                                            </div>
                                            <div className="testimonial-name">
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

export default TestimonialsStyleTwo;