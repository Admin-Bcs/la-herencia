import React, {Component} from 'react';

class ApAbout4Section extends Component {
	render() {
		return (
			<div className="about-us-area about-shape pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-info mb-30">
								<h1> Welcome to <br/> La Herencia Spices</h1>
								{/* <span>with love & dedication</span> */}
								
								<p> 
								Since 2012, La Herencia Spices has thrived on customer service and satisfaction, developing their product according to its needs.
 								Located in New Jersey, La Herencia family has diversified their knowledge and line of products and created a new line of snacks, 
								 Bersy’s Snacks. After the raw good importation, the company handpicks the best product to manufacture and goes through careful inspection 
								 to ensure the best product. To guarantee customer satisfaction, the company keeps up to date with service as they have their section clean,
								  organized, and full of product. La Herencia works to showcase the flavor to connect with many different customers and expand their line of 
								<strong>  Spices, Teas, and Snacks!</strong></p>
								<br/>
								<h1>Our History</h1>
								<p> 
								While our company has been established for nine years, our president has over 24 years of experience in the world of spice. After working as 
								a National Product Manager, he decided to found a family business that now sells to over 7 States. With his experience, Mr. Martinez has grown
								 a company where strangers turn into family. The product represents the community built around the company. La Herencia invites you to be part 
								 of the journey. Thank you and enjoy! </p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="about-img mb-30">
								<br/><br/><br/><br/><br/><br/><br/>								
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