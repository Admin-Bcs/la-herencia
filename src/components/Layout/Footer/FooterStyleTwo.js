import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import CustomSubscribeForm from "../../Elements/Subscribe/CustomSubscribeForm";

const FooterStyleTwo = () => {

	return (
		<footer>
			<div className="footer-area pt-100 pb-65">
				<div className="container">
					<div className="footer-bg pb-50">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper single-footer mb-30">
									<div className="footer-logo">
										<Link href="/" as="/">
											<a> <img src={require("../../../../public/assets/img/logo/logo.png")}
											         alt="logo"/></a>
										</Link>
									</div>
									<div className="footer-text">
										<p>Lorem ipsum dolor amet cons adipisicing elit sed do eiusmod tempor
											incidie.</p>
									</div>
									<ul className="fotter-link">
										<li>
											<i><FontAwesomeIcon icon={['far', 'paper-plane']}/></i>
											205 Olazu Familia, Herba <br/> Street Front USA
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'envelope-open']}/></i>
											zomatainfo@gmail.com
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'headphones']}/></i>
											002- 01008431112
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper single-footer pl-45 mb-30">
									<div className="footer-title">
										<h4>Customer Support</h4>
										<img src={require("../../../../public/assets/img/shape/f2.png")} alt="shape"/>
									</div>
									<ul className="fotter-menu">
										<li><a href="#">Help and Ordering</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Return &amp; Cancellation</a></li>
										<li><a href="#">Delevery Schedule</a></li>
										<li><a href="#">Get a Call</a></li>
										<li><a href="#">Online Enquiry</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper single-footer pl-45 mb-30">
									<div className="footer-title">
										<h4>Newsletters</h4>
										<img src={require("../../../../public/assets/img/shape/f2.png")} alt="shape"/>
									</div>
									<div className="footer-content">
										<p>Enter your email and we’ll send you latest information plans.</p>
									</div>

									<CustomSubscribeForm/>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6">
								<div className="footer-wrapper single-footer pl-40 mb-30">
									<div className="footer-title">
										<h4>Instagram</h4>
										<img src={require("../../../../public/assets/img/shape/f2.png")} alt="shape"/>
									</div>
									<div className="instagram-img">
										<a href="#">
											<img src={require("../../../../public/assets/img/footer/1.jpg")}
											     alt="footer"/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-area footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="copyright">
								<p>
									opyright <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 <a href="#">BDevs</a>.
									All Rights Reserved
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="footer-icon text-md-right">
								<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
								<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
								<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
								<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
								<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterStyleTwo;