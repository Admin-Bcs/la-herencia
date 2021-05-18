import React, { Component, useState } from 'react';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SliderDefault = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

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
                {/* <div className="single-slider">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/ginger.png'})` }}>
                        <div className="container box-title">
                            <div className="row ">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            GROUND GINGER
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            Ground Ginger root provides a powerful punch of pure flavor in its finest form, which is ideal for seasoning sides, baking cookies, and spicing up your favorite dressings and sauces. This refined herb offers that exclusive, biting taste that is essential to innumerable dishes.
                                        </p>
                                        <div className="slider-button">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}
                <div className="single-slider">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_5.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            UÑA DE GATO
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            This is a woody vine found in the tropical jungles of South and Central America. It is known as cat's claw or Uña De Gato in Spanish because of its claw-shaped thorns. The plant root bark is used in herbalism for a variety of ailments, and is sold as a dietary supplement. </p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider cont-h2">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slide_2.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            POULTRY SEASONING
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            Made originally with dried herbs such as sage, rosemary, ground black pepper, and marjoram, among others. It's a perfect condiment to give all your recipes a delicious flavor. </p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="single-slider">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/Garlic.png'})` }}>
                        <div className="container box-title">
                            <div className="row ">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            GARLIC POWDER
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            This seasoning is made from dried garlic that is ground to a granular consistency.
                                            Granulated garlic makes it a cinch to add generous garlic seasoning to meats,
                                            vegetables and homemade breads and rolls.
                                        </p>
                                        <div className="slider-button">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="single-slider">
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_2.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            HULED PUMPKIN SEEDS
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            These tasty pumpkin seeds pack an irresistible crunch along with a major health punch. High in healthy fats, pepitas are a good-for-you, satisfying snack. </p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
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
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_3.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            CHIA SEEDS
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            Chia seeds are the edible seeds of Salvia hispanica, a flowering plant in the mint family native to central and southern Mexico, or of the related Salvia columbariae of the southwestern United States and Mexico. Chia seeds are oval and gray with black and white spots, having a diameter around 2 millimetres. </p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
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
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_4.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            SALVIA TEA HERB
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            a plant in the mint family. Although you may know of sage as a culinary herb, the leaves are rich in antioxidant compounds such ellagic acid (also found in strawberries, raspberries, and walnuts) and rosmarinic acid (found in rosemary and basil). Proponents claim that sage tea can help with certain health conditions, promote weight loss, and improve hair health. </p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
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
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_6.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            GARLIC POWDER
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            This seasoning is made from dried garlic that is ground to a granular consistency. Granulated garlic makes it a cinch to add generous garlic seasoning to meats, vegetables and homemade breads and rolls.
</p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
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
                    <div className="slider-height  d-flex align-items-center" style={{ backgroundImage: `url(${'assets/img/slider/slider_7.png'})` }}>
                        <div className="container box-title">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider-content mt-85 title-slider">
                                        <h2 data-animation="fadeInUp" data-delay=".6s">
                                            GROUND GINGER
                                        </h2>
                                        <p className="text-slider" data-animation="fadeInUp" data-delay=".8s">
                                            Ground Ginger root provides a powerful punch of pure flavor in its finest form, which is ideal for seasoning sides, baking cookies, and spicing up your favorite dressings and sauces. This refined herb offers that exclusive, biting taste that is essential to innumerable dishes.</p>
                                        <div className="slider-button ">
                                            <Link href="/ShopHerencia" as="/ShopHerencia" >
                                                <a data-animation="fadeInLeft" data-delay=".8s" className="btn">
                                                    La Herencia Spices
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

export default SliderDefault;