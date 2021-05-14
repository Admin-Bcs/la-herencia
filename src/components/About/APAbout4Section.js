import React, {Component} from 'react';

class ApAbout4Section extends Component {
	render() {
		return (
			<div className="about-us-area about-shape pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-info mb-30">
								<h1>Welcome To <br/> La Herencia Spices</h1>
								{/* <span>with love & dedication</span> */}
								<p>Since establishment in 2012, La Herencia Spices has thrived on customer service and satisfaction, developing their product according to its needs. Located in Union City, New Jersey, La Herencia family has diversified their knowledge and line of products. Creating a new line of teas, Claudio’s Herbs, and a new line of snacks, Bersy’s Snacks. After the raw good importation, the company handpicks the best product to package and goes through careful inspection to ensure the best product. To guarantee customer satisfaction, the company keeps up to date with service as they have their section clean, organized, and full of product. La Herencia knows spices from how to grow them, to best storage options, and how to showcase the flavor to connect with many different customers and expand their line of <strong>Spices, Teas, and Snacks!</strong></p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="about-img mb-30">
								<img src={require('../../../public/assets/img/about/family.png')} alt='image'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApAbout4Section;