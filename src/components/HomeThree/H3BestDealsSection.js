import React, {Component} from 'react';
import Link from "next/link";

class H3BestDealsSection extends Component {
	render() {
		return (
			<div className="best-deals-area pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-7">
							<div className="best-deals-img mb-30">
								<img src={require('../../../public/assets/img/bg/3.png')} alt='image' />
							</div>
						</div>
						<div className="col-xl-5 col-lg-5">
							<div className="best-deals-wrapper text-center mb-30">
								<div className="best-deals-content">
									<h1>Best Deals Of This Week</h1>
									<div className="best-deals-text">
										<h1>50%</h1>
										<span>Off</span>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt </p>
									<Link href="/shop" as="/shop" >
										<a className="btn">
											Shop Now
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

export default H3BestDealsSection;