import React, {Component} from 'react';
import Link from "next/link";

class H1CtaSection extends Component {
	render() {
		return (
			<div className="cta-area pt-100 pb-90" style={{backgroundImage: `url(${'assets/img/bg/bg2.jpg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-md-8">
							<div className="cta-wrapper mb-15">
								<div className="cta-img">
									<img src={require("../../../public/assets/img/shape/3.png")} alt="shape"/>
								</div>
								<div className="cta-text">
									<h1>Visit Our Zomata Organic</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
										exercitation ullamco laboris nisi ut aliquie.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="cta-button mb-15 text-md-right">
								<Link href="/about" as="/about" >
									<a className="btn">Visit Now</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1CtaSection;