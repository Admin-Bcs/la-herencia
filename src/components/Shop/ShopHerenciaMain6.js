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
                                            <a><img src={require("../../../public/assets/img/product/Bottles/jegibre-molido.jpg")} alt="product" /></a>
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
                                                <a>Ground Ginger</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006589</span><br />
                                            <span>Medium: 8-51101006787</span><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/ajinomoto.jpg")} alt="image" /></a>
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
                                                <a>M.S.G. (Accen)</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006596</span><br />
                                            <span>Medium: 8-51101006794</span><br />
                                            <span>Large:  8-51101006930</span><br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/cebolla-polvo.jpg")} alt="image" /></a>
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
                                                <a>Onion Powder</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006619</span><br />
                                            <span>Medium: 8-51101006800</span><br />
                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/oregano.png")} alt="image" /></a>
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
                                                <a>Oregano Leaves</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006626</span><br />
                                            <span>Large:  8-53135006061</span><br />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/pimenton.jpg")} alt="product" /></a>
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
                                                <a>Paprika</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006633</span><br />
                                            <span>Medium: 8-51101006824</span><br />
                                            <span>Large:  8-59423006850</span><br />

                                            <span></span><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/sal-sazonada.jpg")} alt="image" /></a>
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
                                                <a>Seasoned Salt</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                             <span>Small: 8-51101006640</span><br />
                                            <span>Medium: 8-51101006831</span><br />
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/curcuma-molida.jpg")} alt="image" /></a>
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
                                                <a>Ground Turmeric</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-51101006664</span><br />
                                            <span>Medium: 8-51101006909</span><br />
                                            <span>Large:  8-59423006805</span><br />
 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/nuez-molida.jpg")} alt="image" /></a>
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
                                                <a>Ground Nutmeg</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small: 8-53135006313</span><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/Abahaca.jpg")} alt="image" /></a>
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
                                                <a>Basil Leaves</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-5313006534</span><br />
                                            <span>Medium: 8-53135006269</span><br />
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*ULTIMA LINEA */}
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/italiano.jpg")} alt="product" /></a>
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
                                                <a>Italian Seasoning</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-53135006375</span><br />
                                            <span>Medium: 8-53135006276</span><br />
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/oregano.jpg")} alt="image" /></a>
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
                                                <a>Ground Oregano</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-53135006382</span><br />
                                            <span>Medium: 8-53135	00628	3</span><br />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                {/* <div className="product-wrapper text-center mb-30"> */}
                                <div className="text-center mb-30">
                                    <div className="product-img">
                                        <Link href="#" as="#" >
                                            <a><img src={require("../../../public/assets/img/product/Bottles/chile-polvo.jpg")} alt="image" /></a>
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
                                                <a>Cayene Pepper</a>
                                            </Link>
                                        </h4>

                                        <div className="pro-price">
                                            <span>Small:  8-53135006399</span><br />
                                            <span>Medium: 8-53135006238</span><br />
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="basic-pagination basic-pagination-2 text-center mt-20">
                                    <ul>
                                        <li><Link href="/ShopHerencia5" as="/ShopHerencia5">
                                            <a ><i className="fas fa-angle-double-left"></i></a>
                                        </Link></li>
                                        <li >
                                            <Link href="/ShopHerencia4" as="/ShopHerencia4">
                                                <a> 04</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia5" as="/ShopHerencia5">
                                                <a> 05</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia6" as="/ShopHerencia6">
                                                <a className="indice"> 06</a>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link href="/ShopHerencia7" as="/ShopHerencia7">
                                                <a> 07</a>
                                            </Link>
                                        </li>
                                        <li><Link href="/ShopHerencia7" as="/ShopHerencia7">
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
