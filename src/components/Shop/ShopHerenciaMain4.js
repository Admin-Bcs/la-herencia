import React, { Component } from "react";
import Link from "next/link";
import Brand from "../Common/Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ShopHerenciaMain extends Component {
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
                                            <a><img src={require("../../../public/assets/img/product/comino-entero-.png")} alt="product" /></a>
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
                                                <a>Whole Cumin / Comino Entero</a>
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
                                            <span>8-59423006256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/comino.png")} alt="image" /></a>
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
                                                <a>Ground Cumin / Comino Molido</a>
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
                                            <span>8-59423006263</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/oreganoentero.png")} alt="image" /></a>
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
                                                <a>Whole Oregano Mexicano</a>
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
                                            <span>8-59423006287</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/oreganomolido.png")} alt="image" /></a>
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
                                                <a>Oregano Molido</a>
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
                                            <span>8-59423006294</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/pimienta-dulce-entera.png")} alt="product" /></a>
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
                                                <a>Whole Allspices / Pimienta Dulce</a>
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
                                            <span>8-59423006300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/star-anise.png")} alt="image" /></a>
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
                                                <a>Start Anise / Anis Estrellado</a>
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
                                            <span>8-59423006317</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/anisesemillas.png")} alt="image" /></a>
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
                                                <a>Anise Seeds / Semilla de Anis</a>
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
                                            <span>8-59423006324</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/baking-soda.png")} alt="image" /></a>
                                        </Link>
                                        {/* <div className="product-action">
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
									</div> */}
                                    </div>
                                    <div className="product-text">
                                        <h4>
                                            <Link href="#" as="#" >
                                                <a>Carbonato / Bakin Soda</a>
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
                                            <span>8-59423006461</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/clavo-entero-.png")} alt="image" /></a>
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
                                                <a>Whole Clove</a>
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
                                            <span>8-59423006485</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Whole-nutmeg.png")} alt="product" /></a>
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
                                                <a>Whole Nutmeg</a>
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
                                            <span>8-59423006492</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/pimienta-negra-entera.png")} alt="image" /></a>
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
                                                <a>Whole Black Pepper</a>
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
                                            <span>8-59423006560</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/pimienta-negra-molida.png")} alt="image" /></a>
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
                                                <a>Ground Black Pepper</a>
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
                                            <span>8-59423006577</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="basic-pagination basic-pagination-2 text-center mt-20">
                                    <ul>
                                        <li><Link href="/ShopHerencia3" as="/ShopHerencia3">
                                            <a ><i className="fas fa-angle-double-left"></i></a>
                                        </Link></li>

                                        <li >
                                            <Link href="/ShopHerencia2" as="/ShopHerencia2">
                                                <a> 02</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia3" as="/ShopHerencia3">
                                                <a> 03</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia4" as="/ShopHerencia4">
                                                <a className="indice"> 04</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia5" as="/ShopHerencia5">
                                                <a> 05</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia6" as="/ShopHerencia6">
                                                <a> 06</a>
                                            </Link>
                                        </li>
                                        <li><Link href="/ShopHerencia5" as="/ShopHerencia5">
                                            <a><i className="fas fa-angle-double-right"></i></a>
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default ShopHerenciaMain;
