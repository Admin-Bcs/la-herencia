import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class SPShopDetailsSection extends Component {
	render() {
		return (
			<section className="shop-banner-area pt-120 pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<Tabs selectedTabClassName="active">
								<div className="product-details-img mb-20">
									<TabPanel>
										<div className="product-large-img">
											<img src={require('../../../public/assets/img/product/lg1.png')}
											     alt="image"/>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="product-large-img">
											<img src={require('../../../public/assets/img/product/lg2.jpg')}
											     alt="image"/>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="product-large-img">
											<img src={require('../../../public/assets/img/product/lg3.jpg')}
											     alt="image"/>
										</div>
									</TabPanel>
								</div>
								{/* <TabList className="shop-thumb-tab mb-30">
									<Tab>
										<a className="nav-link">
											<img src={require('../../../public/assets/img/product/lg1.jpg')}
											     alt="image"/>
										</a>
									</Tab>
									<Tab>
										<a className="nav-link">
											<img src={require('../../../public/assets/img/product/lg2.jpg')}
											     alt="image"/>
										</a>
									</Tab>
									<Tab>
										<a className="nav-link">
											<img src={require('../../../public/assets/img/product/lg3.jpg')}
											     alt="image"/>
										</a>
									</Tab>
								</TabList> */}
							</Tabs>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="product-details mb-30">
								<div className="product-details-title">
									<h1>Natural Organic
										Tomato</h1>
									<div className="details-price mb-20">
										<span>$700.00</span>
										<span className="old-price">$820.00</span>
									</div>
									<div className="pro-rating mb-20">
										<FontAwesomeIcon icon={['far', 'star']}/>
										<FontAwesomeIcon icon={['far', 'star']}/>
										<FontAwesomeIcon icon={['far', 'star']}/>
										<FontAwesomeIcon icon={['far', 'star']}/>
										<FontAwesomeIcon icon={['far', 'star']}/>
									</div>
								</div>
								<p>It is a long established fact that a reader will be distracted by the readable
									content of a page when looking
									at its
									layout. The point of using Lorem Ipsum is that it has a more-or-less normal
									distribution of letters, as opposed
									to
									using 'Content here, content here', making it look like readable English.</p>
								<div className="product-social mb-30">
									<a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
									<a href="https://www.instagram.com/laherenciaspices"><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
									<a href="https://www.pinterest.com/Laherenciaspices/"><FontAwesomeIcon icon={['fab', 'pinterest']}/></a>
									
								</div>
								{/* <div className="product-details-action">
									<form action="#">
										<div className="plus-minus">
											<div className="cart-plus-minus"><input type="text" defaultValue="1"/></div>
										</div>
										<button className="btn btn-black" type="submit">add to cart</button>
									</form>
								</div> */}
							</div>
						</div>
					</div>

					<div className="row mt-50">
						<div className="col-xl-12">
							<div className="product-review">
								<Tabs selectedTabClassName="active">
									<TabList className="nav review-tab">
										<Tab className="nav-item">
											<a className="nav-link">Description</a>
										</Tab>
										<Tab className="nav-item">
											<a className="nav-link">Reviews (2)</a>
										</Tab>
									</TabList>
									<div className="tab-content">
										<TabPanel>
											<div className="review-text mt-30">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmod
													tempor incididunt ut labore
													et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
													exercitation ullamco laboris nisi
													ut aliquip ex ea commodo consequat.</p>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmod
													tempor incididunt ut labore
													et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
													exercitation ullamco laboris nisi
													ut aliquip ex ea commodo consequat.</p>
											</div>
										</TabPanel>
										<TabPanel>
											<div className="review-text mt-30">
												<div className="product-commnets">
													<div className="product-commnets-list">
														<div className="pro-comments-img">
															<img
																src={require('../../../public/assets/img/product/comments/01.png')}
																alt="image"/>
														</div>
														<div className="pro-commnets-text">
															<h4>Roger West - <span>June 5, 2017</span></h4>
															<div className="pro-rating">
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
															</div>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing
																elit, sed do eiusmod tempor incididunt ut labore et
																dolore magna aliqua. Ut enim ad minim veniam, quis
																nostrud exercitation.
															</p>
														</div>
													</div>
													<div className="product-commnets-list mt-30">
														<div className="pro-comments-img">
															<img
																src={require('../../../public/assets/img/product/comments/02.png')}
																alt="image"/>
														</div>
														<div className="pro-commnets-text">
															<h4>Roger West -
																<span>June 5, 2017</span>
															</h4>
															<div className="pro-rating">
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
																<FontAwesomeIcon icon={['far', 'star']}/>
															</div>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing
																elit, sed do eiusmod tempor incididunt ut labore et
																dolore magna aliqua. Ut enim ad minim veniam, quis
																nostrud exercitation.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="row mt-40">
												<div className="col-xl-7">
													<div className="review-box">
														<h4>Add a Review</h4>
														<div className="your-rating mb-40">
															<span>Your Rating : </span>
															<div className="rating-list">
																<a href="#">
																	<FontAwesomeIcon icon={['far', 'star']}/>
																</a>
																<a href="#">
																	<FontAwesomeIcon icon={['far', 'star']}/>
																</a>
																<a href="#">
																	<FontAwesomeIcon icon={['far', 'star']}/>
																</a>
																<a href="#">
																	<FontAwesomeIcon icon={['far', 'star']}/>
																</a>
																<a href="#">
																	<FontAwesomeIcon icon={['far', 'star']}/>
																</a>
															</div>
														</div>
														<form className="review-form" action="#">
															<div className="row">
																<div className="col-xl-12">
																	<label htmlFor="message">YOUR REVIEW</label>
																	<textarea name="message" id="message" cols="30"
																	          rows="10"/>
																</div>
																<div className="col-xl-6">
																	<label htmlFor="r-name">Name</label>
																	<input type="text" id="r-name"/>
																</div>
																<div className="col-xl-6">
																	<label htmlFor="r-email">Email</label>
																	<input type="email" id="r-email"/>
																</div>
																<div className="col-xl-12">
																	<button className="btn brand-btn">Add your Review
																	</button>
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
										</TabPanel>
									</div>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SPShopDetailsSection;