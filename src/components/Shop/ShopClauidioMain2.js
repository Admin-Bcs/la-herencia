import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Brand from "../Common/Brand";

class ShopClaudioMain2 extends Component {
    render() {
        return (
            <main>
                <div className="product-area pos-relative pt-110 pb-120 fix">
                    <div className="container">
                        {/* <div className="row">
						<div className="col-xl-6 col-lg-5 col-md-6 col-sm-7">
							<div className="product-showing">
								<p>Showing 1–22 of 32 results</p>
							</div>
						</div>
						<div className="col-xl-6 col-md-6 col-sm-5">
							<div className="pro-filter mb-40 f-right">
								<form action="#">
									<select name="pro-filter" id="pro-filter">
										<option value="1">Shop By</option>
										<option value="2">Top Sales </option>
										<option value="3">New Product </option>
										<option value="4">A to Z Product </option>
									</select>
								</form>
							</div>
						</div>
					</div> */}
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/cal.png")} alt="product" /></a>
                                        </Link>

                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Prodigiosa</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006119</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/cancerina.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Uña de Gato/ Cat's Claw</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006133</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/cola de caballo.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Eucalyptus</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006726</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/product4.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Chamomille Flowers</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006757</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/HierbaMaestra.png")} alt="product" /></a>
                                        </Link>

                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Chia 7 Days Service</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006801</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/12.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Chia 14 Days Service</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006818</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/06.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Bay Leaves/ Hojas de Laurel</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006270</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/hoja de mango.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Flax Seed / Semilla de Linaza</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006331</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/hojanaranjo.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Flor de Tilo / Linden Flower</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006348</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/09.png")} alt="product" /></a>
                                        </Link>

                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Romero</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006355</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/rinonina-2.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Ruda / Rue</a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006362</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Sage.png")} alt="image" /></a>
                                        </Link>
                                        <div className="product-action">
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Valeriana </a>
                                            </Link>
                                        </h4>
                                        <div className="pro-rating">
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                            <i><FontAwesomeIcon icon={['far', 'star']} /></i>
                                        </div>
                                        <div className="pro-price">
                                            <span>8-59423006379</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="basic-pagination basic-pagination-2 text-center mt-20">

                                <ul>
                                    <li><Link href="/ShopClaudio" as="/ShopClaudio">
                                        <a ><i className="fas fa-angle-double-left"></i></a>
                                    </Link></li>

                                    <li >
                                        <Link href="/ShopClaudio" as="/ShopClaudio">
                                            <a> 01</a>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href="/ShopClaudio2" as="/ShopClaudio2">
                                            <a className="indice"> 02</a>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href="/ShopClaudio3" as="/ShopClaudio3">
                                            <a> 03</a>
                                        </Link>
                                    </li>
                                    <li><Link href="/ShopClaudio3" as="/ShopClaudio3">
                                        <a ><i className="fas fa-angle-double-right"></i></a>
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* brand-start */}
                <Brand />
                {/* brand-end */}

            </main>
        );
    }
}


export default ShopClaudioMain2;
