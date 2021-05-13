import React, {Component} from 'react';
import Link from "next/link";

class H1AboutSection extends Component {
	render() {
		return (
			<div className="about-us-area pt-115 pb-90" style={{backgroundImage: `url(${'assets/img/bg/about.png'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-us-img mb-30">
								<img src={require("../../../public/assets/img/about/1.png")} alt="about"/>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 ">
							<div className="about-us-text mb-30">
								<h1>Welcome To <br/> La Herencia</h1>
								<span>with love & dedication</span>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure
									dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
									voluptatem accusantium doloremque.
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