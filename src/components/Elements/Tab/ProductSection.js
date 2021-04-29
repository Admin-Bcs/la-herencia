import React, {Component} from 'react';
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
				<div className="shape spahe2 bounce-animate"><img src={require("../../../../public/assets/img/shape/shape2.png")} alt="shape" /></div>
				<div className="shape spahe3 bounce-animate"><img src={require("../../../../public/assets/img/shape/shape3.png")} alt="shape" /></div>
				<div className="shape spahe4 bounce-animate"><img src={require("../../../../public/assets/img/shape/shape4.png")} alt="shape" /></div>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../../public/assets/img/shape/1.png")} alt=""/>
								</div>
								<h1>Our Product</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
									labore et dolore magna aliqua enim minim veniam
								</p>
							</div>
						</div>
					</div>
					<Tabs className="row" selectedTabClassName="active">
						<div className="col-xl-12">
							<TabList className="nav product-tab justify-content-center mb-75">
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-diet"></i>
										</div>
										<h4>Vegetables</h4>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-tomato"></i>
										</div>
										<h4> Shallot</h4>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-pumpkin"></i>
										</div>
										<h4> Pumpkin</h4>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											<i className="flaticon-vegetarian"></i>
										</div>
										<h4>Orange</h4>
									</div>
								</Tab>
							</TabList>

							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
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
														<a>Broccoli Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
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
														<a>Avocado Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
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
														<a>Breadfruit Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
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
														<a>Blackberries Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
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
														<a>Blackberries Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
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
														<a>Broccoli Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
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
														<a>Avocado Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
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
														<a>Breadfruit Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
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
														<a>Breadfruit Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
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
														<a>Blackberries Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
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
														<a>Broccoli Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
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
														<a>Avocado Head</a>
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
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="product-wrapper text-center mb-30">
											<div className="product-img">
												<Link href="/shop-details" as="/shop-details" >
													<a><img src={require("../../../../public/assets/img/product/product1.png")} alt="product"/></a>
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
														<a>Broccoli Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product3.png")} alt="image"/></a>
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
														<a>Breadfruit Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product4.png")} alt="image"/></a>
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
														<a>Blackberries Head</a>
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
													<a><img src={require("../../../../public/assets/img/product/product2.png")} alt="image"/></a>
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
														<a>Avocado Head</a>
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