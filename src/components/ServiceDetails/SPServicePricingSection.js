import React, {Component} from "react";

export default class SPServicePricingSection extends Component {
	render() {
		return (
			<div className="pricing-area pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt="image"/>
								</div>
								<h1>Our Pricing</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor
									incididunt ut labore et dolore magna aliqua enim minim veniam
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="pricing-wrapper text-center mb-30">
								<div className="pricing-top-text">
									<h1>$25.95</h1>
								</div>
								<div className="pricing-text">
									<h2>Regular Plan</h2>
									<p>
										Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers
										dolore magna aliqua. Ut enim minimveniam
									</p>
								</div>
								<div className="pricing-button">
									<a className="btn" href="#">Select Plan</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="pricing-wrapper active text-center mb-30">
								<div className="pricing-top-text">
									<h1>$45.95</h1>
								</div>
								<div className="pricing-text">
									<h2>Premium Plan</h2>
									<p>
										Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers
										dolore magna aliqua. Ut enim minimveniam
									</p>
								</div>
								<div className="pricing-button active">
									<a className="btn" href="#">Select Plan</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="pricing-wrapper text-center mb-30">
								<div className="pricing-top-text">
									<h1>$95.95</h1>
								</div>
								<div className="pricing-text">
									<h2>Diamond Plan</h2>
									<p>Lorem ipsum dolor consectet elit sed do eiustemp orcididunt ut labore ethers
										dolore magna aliqua. Ut enim minimveniam</p>
								</div>
								<div className="pricing-button">
									<a className="btn" href="#">Select Plan</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
