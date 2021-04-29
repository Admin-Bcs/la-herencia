import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SPServiceDetailsSection extends Component {
	render() {
		return (
			<div className="services-details-area pt-120 pb-75">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 mb-30">
							<div className="services-sidebar mb-60"
							     style={{backgroundImage: `url(${'assets/img/service/service-details/4.jpg'})`}}>
								<div className="services-title">
									<h1>Services</h1>
									<div className="servicest-t-img">
										<img
											src={require('../../../public/assets/img/service/service-details/shape.png')}
											alt="image"/>
									</div>
								</div>
								<ul className="services-link">
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Organic Vegetables</a>
									</li>
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Full Of
										Vitamins</a></li>
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Fresh
										Milk &amp; Meat</a></li>
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Organic Seeds</a>
									</li>
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Organic Fruits</a>
									</li>
									<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/> Corporate
										Design</a></li>
								</ul>
							</div>
							<div className="services-sidebar mb-60"
							     style={{backgroundImage: `url(${'assets/img/service/service-details/5.jpg'})`}}>
								<div className="services-title">
									<h1>Downloads</h1>
									<div className="servicest-t-img">
										<img
											src={require('../../../public/assets/img/service/service-details/shape.png')}
											alt="image"/>
									</div>
								</div>
								<ul className="services-link">
									<li><a href="#"><i className="far fa-file-word"></i>Presentation pdf</a></li>
									<li><a href="#"><i className="far fa-file-word"></i>Wordfile.doc</a></li>
								</ul>
							</div>
							<div className="services-sidebar servicess-sidebar p-0">
								<div className="services-banner">
									<a href="#">
										<img
											src={require('../../../public/assets/img/service/service-details/banner.jpg')}
											alt="image"/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-lg-8 mb-30">
							<div className="services-details-wrapper">
								<div className="services-details-img mb-50">
									<img src={require('../../../public/assets/img/service/service-details/1.jpg')}
									     alt="image"/>
								</div>
								<div className="services-details-text">
									<h1>Organic Vegetables</h1>
									<p>But I must explain to you how all this mistaken idea of denouncing pleasure and
										praising pain was born and I will give you a complete account of the system, and
										expound the actual teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
										itself, because it is pleasure, but because those who do not know how to pursue
										pleasure rationally encounter consequences that are extremely painful. Nor again
										is there anyone who loves or pursues or desires to obtain pain of itself,
										because it is pain, but because occasionally circumstances occur in which toil
										and pain can procure him some great pleasure. To take a trivial example, which
										of us ever undertakes laborious physical exercise, except to obtain some
										advantage from it? But who has any right to find fault with a man who chooses to
										enjoy a pleasure that has no annoying consequences, or one who avoids a pain
										that produces no resultant pleasure</p>
								</div>
								<div className="services-details-info"
								     style={{backgroundImage: `url(${'assets/img/service/service-details/6.jpg'})`}}>
									<p>Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam voluptatem
										quia. </p>
								</div>
								<div className="services-details-text mb-35">
									<h1>Why Needs Organic Food For Health</h1>
									<p>No one rejects dislikes or avoids pleasure itself because it is pleasure but
										because those who do not know how to pursue pleasure rationally encounter
										consequences that are extremely painful. Nor again is there anyone who loves or
										pursues desires to obtain pain of itself because it is pain, but because
										occasionally.</p>
								</div>
								<div className="row mb-30">
									<div className="col-xl-6 col-lg-7 col-md-6 mb-30">
										<div className="services-details-link">
											<div className="services-details-icon-img">
												<img
													src={require('../../../public/assets/img/service/service-details/icon2.png')}
													alt="image"/>
											</div>
											<div className="services-details-link-text">
												<p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
													tempor incididunt</p>
											</div>
										</div>
										<div className="services-details-link">
											<div className="services-details-icon-img">
												<img
													src={require('../../../public/assets/img/service/service-details/icon2.png')}
													alt="image"/>
											</div>
											<div className="services-details-link-text">
												<p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
													tempor incididunt</p>
											</div>
										</div>
										<div className="services-details-link">
											<div className="services-details-icon-img">
												<img
													src={require('../../../public/assets/img/service/service-details/icon2.png')}
													alt="image"/>
											</div>
											<div className="services-details-link-text">
												<p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod
													tempor incididunt</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-5 col-md-6 mb-30">
										<div className="services-details-link-img">
											<img
												src={require('../../../public/assets/img/service/service-details/1.jpg')}
												alt="image"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6">
										<div className="services2-img mb-30">
											<img
												src={require('../../../public/assets/img/service/service-details/2.jpg')}
												alt="image"/>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6">
										<div className="services2-img mb-30">
											<img
												src={require('../../../public/assets/img/service/service-details/3.jpg')}
												alt="image"/>
										</div>
									</div>
								</div>
								<div className="services2-details-text">
									<p>Pleasure and praising pain was born and I will give you a complete account of the
										system, and expound the actual teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
										itself, because it is pleasure, but because those who do not know how to pursue
										pleasure rationally encounter consequences that are extremely painful. Nor again
										is there anyone who loves or pursues or desires to obtain pain of itself,
										because it is pain, but because occasionally circumstances occur in which toil
										and pain can procure him some </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SPServiceDetailsSection;