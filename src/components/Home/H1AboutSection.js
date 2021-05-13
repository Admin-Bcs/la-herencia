import React, { Component } from 'react';
import Link from "next/link";

class H1AboutSection extends Component {
	render() {
		return (
			<div className="about-us-area pt-115 pb-90" style={{ backgroundImage: `url(${'assets/img/bg/about.png'})` }}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-us-img mb-30">
								<img src={require("../../../public/assets/img/about/about.png")} alt="about" />
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 ">
							<div className="about-us-text mb-30 text-slider">
								<h1>Welcome To <br /> La Herencia</h1>
								<p>
									La Herencia Spices has thrived on customer service and satisfaction,
									developing their product according to its needs. Located in Union City, New Jersey,
									La Herencia family has diversified their knowledge and line of products.
								</p>
								<Link href="/about" as="/about" >
									<a className="btn">Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1AboutSection;