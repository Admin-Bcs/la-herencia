import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default class SPProductSectionClaudio extends Component {
	render() {
		return (
			<div className="product-area pos-relative pt-110 pb-120 fix">
				<div className="container">
					<div className="row">
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
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Cal Mexicana</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Cancerina</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Cola de Caballo</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Deabetis</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Hierba Maestra</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Hoja de Guayabo</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Hoja de Mango</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Hoja de Naranjo</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Ortiga</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Rinonina</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Salvia / Sage</a>
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
										<span>$16.70</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							{/* <div className="product-wrapper text-center mb-30"> */}
							<div className="text-center mb-30">
								<div className="product-img">
									<Link href="/shop-details" as="/shop-details" >
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
										<Link href="/shop-details" as="/shop-details" >
											<a>Tea Para la Tos</a>
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
										<span>$49.99</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="basic-pagination basic-pagination-2 text-center mt-20">
								<ul>
									<li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
									<li><a href="#">01</a></li>
									<li><a href="#">02</a></li>
									<li><a href="#">03</a></li>
									<li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
									<li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
