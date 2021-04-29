import React, {Component} from 'react';
import Link from "next/link";

class H2ChooseUs2Section extends Component {
	render() {
		return (
			<div className="choose-us-area pt-120 pb-90" style={{ backgroundImage:`url(${'assets/img/bg/bg8.jpg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="choose2-img mb-30">
								<img src={require("../../../public/assets/img/choose/02.png")} alt="choose"/>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="single-choose mb-30">
								<div className="choose-title">
									<h1>Fresh & Organic Food Made Our Health Healthy </h1>
								</div>
								<div className="choose2-content">
									<div className="choose2-icon-img">
										<img src={require("../../../public/assets/img/icon/4.png")} alt="icon"/>
									</div>
									<div className="choose2-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
								<div className="choose2-content">
									<div className="choose2-icon-img">
										<img src={require("../../../public/assets/img/icon/4.png")} alt="icon"/>
									</div>
									<div className="choose2-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
								</div>
								<div className="choose-button">
									<Link href="/about" as="/about" >
										<a className="btn">
											Learn More
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

export default H2ChooseUs2Section;