import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CustomSubscribeForm from "../../Elements/Subscribe/CustomSubscribeForm";

const FooterStyleThree = () => {
	return (
		<footer>
			<div className="footer-area pt-80" style={{backgroundImage: `url(${'assets/img/bg/bg14.jpg'})`}}>
				<div className="container">
					<div className="footer-bg pb-50">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper mb-30">
									<div className="footer-logo">
										<a href="index.html"><img
											src={require("../../../../public/assets/img/logo/white.png")} alt=""/></a>
									</div>
									<div className="footer-text">
										<p>Lorem ipsum dolor amet cons adipisicing elit sed do eiusmod tempor incididunt
											ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
											exercitation ullamco laboris nisi ut aliquip.</p>
									</div>
									<div className="footer-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper pl-45 mb-30">
									<div className="footer-title">
										<h4>Customer Support</h4>
										<img src={require("../../../../public/assets/img/shape/f.png")} alt="shape"/>
									</div>
									<ul className="fotter-menu">
										<li><a href="#">Help and Ordering</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Return & Cancellation</a></li>
										<li><a href="#">Delevery Schedule</a></li>
										<li><a href="#">Get a Call</a></li>
										<li><a href="#">Online Enquiry</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper pl-45 mb-30">
									<div className="footer-title">
										<h4>Contact Info</h4>
										<img src={require("../../../../public/assets/img/shape/f.png")} alt="shape"/>
									</div>
									<ul className="fotter-link">
										<li>
											<i><FontAwesomeIcon icon={['far', 'paper-plane']}/></i>
											<span>205 Olazu Familia, Herba Street Front USA</span>
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'envelope-open']}/></i>
											<span>zomatainfo@gmail.com</span>
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'headphones']}/></i>
											<span>002- 01008431112</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper pl-40 mb-30">
									<div className="footer-title">
										<h4>Newsletters</h4>
										<img src={require("../../../../public/assets/img/shape/f.png")} alt="shape"/>
									</div>
									<div className="footer-content">
										<p>Enter your email and we’ll send you latest information plans.</p>
									</div>

									<CustomSubscribeForm/>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom-area">
						<div className="row">
							<div className="col-xl-12">
								<div className="copyright text-center">
									<p>
										opyright <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 <a
										href="#">BDevs</a>. All Rights Reserved</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterStyleThree;