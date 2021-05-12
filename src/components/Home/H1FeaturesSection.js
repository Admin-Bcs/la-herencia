import React, {Component} from 'react';
import Link from "next/link";

class H1FeaturesSection extends Component {
	render() {
		return (
			<div className="features-area pt-110 pb-90" style={{ backgroundImage:`url(${"assets/img/bg/bg1.jpg"})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape"/>
								</div>
								<h1>Our Features</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
									labore et dolore magna aliqua enim minim veniam
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img cat1">
									<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/laherencia.png")} alt="features"/>
								</div>
								<div className="features-text">
									<h4>La Herencia</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt
										ut labore et dolore magna aliqua.
									</p>
									<Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img">
									<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Bersys.png")} alt="features"/>
								</div>
								<div className="features-text">
									<h4>Bersys Snack</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt
										ut labore et dolore magna aliqua.
									</p>
									<Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="features-wrapper text-center mb-30">
								<div className="features-img">
									<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Claudio.png")} alt="features"/>
								</div>
								<div className="features-text">
									<h4>Claudio Tea</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt
										ut labore et dolore magna aliqua.
									</p>
									<Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
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

export default H1FeaturesSection;