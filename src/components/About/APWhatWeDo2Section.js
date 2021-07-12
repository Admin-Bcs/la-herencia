import React, { Component } from 'react';
import Link from "next/link";

class ApWhatWeDo2Section extends Component {
	render() {
		return (
			<div className="we-do-area pt-110 pb-85">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt='image' />
								</div>
								<h1>Who We Are </h1>

							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets/img/icon/vision.svg")} alt="icon" />
								</div>
								<div className="we-do-text">
									<h4><a href="#">Vision: Diversify</a></h4>
									<p>Our products come from worldwide, America, Mexico, Latin America, and Asia! Yet, we are always looking to learn more to diversify our customer’s palate and our own.</p>
									{/* <Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link> */}
								</div> 
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center  mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets/img/icon/mision.svg")} alt="icon" />
								</div>
								<div className="we-do-text">
									<h4><a href="#">Mission: Service </a></h4>
									<p>We pride ourselves in providing service along with all products. Constantly working to keep sections clean, organized, and up to date is all part of the package.</p>
									{/* <Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link> */}
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets/img/icon/values.svg")} alt="icon" />
								</div>
								<div className="we-do-text">
									<h4><a href="#">Values: Quality </a></h4>
									<p>At La Herencia, we are all strong believers in producing the best quality. Everything from the bottle to the product itself is carefully monitored to guarantee customer satisfaction.</p>
									{/* <Link href="/services-details" as="/services-details" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApWhatWeDo2Section;