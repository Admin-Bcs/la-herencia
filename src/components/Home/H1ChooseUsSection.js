import React, { Component } from 'react';

class H1ChooseUsSection extends Component {
	render() {
		return (
			<div className="choose-us-area pt-100 pb-70 pos-relative">
				<div className="shape spahe2 bounce-animate">
					<img src={require("../../../public/assets/img/shape/why-shape.png")} alt="" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-12">
							<div className="choose-img mb-20">
								<img src={require("../../../public/assets/img/choose/Choose.png")} alt="" />
							</div>
						</div>
						<div className="col-xl-5 col-lg-12">
							<div className="choose-wrapper mb-30">
								<div className="choose-section">
									<br /> <br /> <br /> 
									<h1>Why Choose Us</h1>
									<p>
									We guarantee customer satisfaction, the company keeps up to date with service
									 as they have their section clean, organized, and full of product. La Herencia 
									 works to showcase the flavor of our products to connect with many different 
									 customers to learn more and expand our line of <strong> Spices, Herbs, and Snacks!</ strong >


									</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1ChooseUsSection;