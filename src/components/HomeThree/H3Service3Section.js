import React, {Component} from 'react';
import Link from "next/link";

class H3Service3Section extends Component {
	render() {
		return (
			<div className="services-area pt-110 pb-90 gray2-bg">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt='image' />
								</div>
								<h1>Our Services</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="services-wrapper mb-30">
								<div className="services-img">
									<Link href="/services-details" as="/services-details" >
										<a>
											<img src={require('../../../public/assets/img/service/1.jpg')} alt='image' />
										</a>
									</Link>
								</div>
								<div className="services-text text-center">
									<h3><a href="#">Organic Vegetables</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="services-wrapper mb-30">
								<div className="services-img">
									<Link href="/services-details" as="/services-details" >
										<a>
											<img src={require('../../../public/assets/img/service/2.jpg')} alt='image' />
										</a>
									</Link>
								</div>
								<div className="services-text text-center">
									<h3><a href="#">Orginal Fresh Fruits</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="services-wrapper mb-30">
								<div className="services-img">
									<Link href="/services-details" as="/services-details" >
										<a>
											<img src={require('../../../public/assets/img/service/3.jpg')} alt='image' />
										</a>
									</Link>
								</div>
								<div className="services-text text-center">
									<h3><a href="#">Fresh Milk & Meat</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H3Service3Section;