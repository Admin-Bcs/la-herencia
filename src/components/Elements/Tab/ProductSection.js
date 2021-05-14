import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from "next/link";

class ProductSection extends Component {
	render() {
		return (
			<div className="product-area pos-relative pt-110 pb-85 fix">
				<div className="shape spahe1 bounce-animate">
					<img src={require("../../../../public/assets/img/shape/shape1.png")} alt="shape" />
				</div>
				<div className="shape spahe2 bounce-animate"><img src={require("../../../../public/assets/img/shape/spices.svg")} alt="shape" /></div>
				<div className="shape spahe3 bounce-animate"><img src={require("../../../../public/assets/img/shape/tea.svg")} alt="shape" /></div>
				<div className="shape spahe4 bounce-animate"><img src={require("../../../../public/assets/img/shape/snacks.svg")} alt="shape" /></div>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../../public/assets/img/shape/1.png")} alt="" />
								</div>
								<h1>Our Products</h1>
							</div>
						</div>
					</div>
					<Tabs className="row" selectedTabClassName="active">
						<div className="col-xl-12">
							<TabList className="nav product-tab justify-content-center mb-75">
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-tomato"></i>
										</div>
										<h4> TEA HERBS</h4>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-pumpkin"></i>
										</div>
										<h4> SNACKS</h4>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-vegetarian"></i>
										</div>
										<h4>SPICES</h4>
									</div>
								</Tab>
							</TabList>

							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/cola de caballo.png")} alt="product" /></a>
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
														<a>Horsetail Grass</a>
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
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/hoja de mango.png")} alt="image" /></a>
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
														<a>Mango Leaf</a>
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
													<span>$29.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/hoja de tilo.png")} alt="image" /></a>
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
														<a>Linden Leaves</a>
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
													<span>$25.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/stress tea.png")} alt="image" /></a>
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
														<a> Stress Tea</a>
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
							</TabPanel>
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/bersys 2.png")} alt="image" /></a>
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
														<a>Salty Fava Bean</a>
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
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/bersys 3.png")} alt="product" /></a>
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
														<a>Spicy Fava Bean</a>
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
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/bersys 4.png")} alt="image" /></a>
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
														<a>Crisp Pumpkin</a>
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
													<span>$29.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/punes.png")} alt="image" /></a>
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
														<a>Prunes</a>
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
													<span>$25.99</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/Anise.png")} alt="image" /></a>
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
														<a>Anise Seed</a>
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
													<span>$25.99</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/Spices.png")} alt="image" /></a>
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
														<a>Spices</a>
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
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/chia.png")} alt="product" /></a>
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
														<a>Chia Seed</a>
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
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/Poultry.png")} alt="image" /></a>
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
														<a>Poultry Seasoning</a>
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
													<span>$29.99</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>

						</div>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default ProductSection;