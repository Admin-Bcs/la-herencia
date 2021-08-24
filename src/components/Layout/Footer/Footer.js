import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomSubscribeForm from "../../Elements/Subscribe/CustomSubscribeForm";

const Footer = () => {

	return (
		<footer>
			<div className="footer-area pt-200" style={{ backgroundImage: `url(${'assets/img/bg/bg6.jpg'})` }}>
				<div className="container">
					<div className="footer-bg pb-50">
						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-6">
								<div className="footer-wrapper mb-30">
									<div >
										<a href="/"><img
											className="retina-logo" src={require("../../../../public/assets/img/logo/laherencia/laherencia.png")} alt="" /></a>
									</div>

									<div className="footer-icon color-ico" >
										<li>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
											<span> /laherenciaspices </span>
										</li>
										<li>
											<a href="https://www.instagram.com/laherenciaspices"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
											{/* 	<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a> */}
											<span> /laherenciaspices </span>
										</li>
										<li>
											<a href="https://www.pinterest.com/Laherenciaspices/"><i><FontAwesomeIcon icon={['fab', 'pinterest']} /></i></a>
											{/* 	<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']} /></i></a> */}
											<span> /Laherenciaspices </span>
										</li>

									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6">
								<div className="footer-wrapper pl-45 mb-30">
									<div className="footer-title">
										<h4>La Herencia Spices <br /> Office</h4>
										<img src={require("../../../../public/assets/img/shape/f.png")} alt="shape" />
									</div>
									<ul className="fotter-link">
										<li>
											<i><FontAwesomeIcon icon={['far', 'paper-plane']} /></i>
											<span>
												422 11th Street
												Union City, NJ 07087
											</span>
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'envelope-open']} /></i>
											<span>services@laherenciaspices.com</span>
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'phone']} /></i>
											<span>201-223-6809</span>
										</li>
										<li>
											<i><FontAwesomeIcon icon={['far', 'phone']} /></i>
											
											<span> Claudio Martinez:  201-916-7311</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-6">
								<div className="footer-wrapper pl-40 mb-30">
									<div className="footer-title">
										<h4> JOIN US </h4>
										<img src={require("../../../../public/assets/img/shape/f.png")} alt="shape" />
									</div>
									<div className="footer-content">
										<p>We would love for you to be part of our mailing list to keep you up to date with our products.</p>
									</div>
									<CustomSubscribeForm />
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom-area">
						<div className="row">
							<div className="col-xl-12">
								<div className="copyright text-center">
									<p>
										Copyright  <FontAwesomeIcon icon={['far', 'copyright']} /> 2021 <a
											href="#">La Herencia Spices</a>. All
										Rights Reserved.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;