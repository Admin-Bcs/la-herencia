import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from "next/link";
import ico1 from '../../../../public/assets/img/icon/teaherbs.svg'
import ico2 from '../../../../public/assets/img/icon/snacks.svg'
import ico3 from '../../../../public/assets/img/icon/spices.svg'
/* TEXT */






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

								{/* <Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											{/* <i className="flaticon-pumpkin"></i> 
											<img src={ico1} alt="ico1" />
										</div>
										<h6> TEA HERBS</h6>
									</div>
								</Tab> */}
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											{/* <i className="flaticon-pumpkin"></i> */}
											<img src={ico2} alt="ico2" />
										</div>
										<h6> SNACKS</h6>
									</div>
								</Tab>
								<Tab className="nav-item">
									<div className="product-tab-content text-center">
										<div className="product-tab-img">
											{/* <i className="flaticon-vegetarian"></i> */}
											<img src={ico3} alt="ico3" />
										</div>
										<h6>SPICES</h6>
									</div>
								</Tab>
							</TabList>

							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/cola de caballo.png")} alt="product" /></a>
												</Link>

												{/* <div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div> */}
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/hoja de mango.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$29.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/tilo.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$25.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/teestres.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/saltyfava1.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/saltyfava.png")} alt="product" /></a>
												</Link>

												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/crisppumpkin.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$29.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/prunes.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$25.99</span>
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="row">
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/Anise.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$25.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/Spices.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/chia.png")} alt="product" /></a>
												</Link>

												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$49.99</span>
												</div> */}
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6">
										<div className="text-center mb-30">
											{/* <div className="product-wrapper text-center mb-30"> */}
											<div className="product-img">
												<Link href= "#" as= "#" >
													<a><img src={require("../../../../public/assets/img/product/Poultry.png")} alt="image" /></a>
												</Link>
												<div className="product-action">
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'heart']} /></i></a>
													<a href= "#"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
												</div>
											</div>
											<div className="product-text">
												<h4>
													<Link href= "#" as= "#" >
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
												{/* <div className="pro-price">
													<span>$29.99</span>
												</div> */}
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