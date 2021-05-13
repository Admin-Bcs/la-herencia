import React, {Component} from 'react';

class ApAbout4Section extends Component {
	render() {
		return (
			<div className="about-us-area about-shape pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-info mb-30">
								<h1>Welcome To <br/> La Herencia</h1>
								<span>with love & dedication</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
									mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="about-img mb-30">
								<img src={require('../../../public/assets/img/about/2.jpg')} alt='image'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApAbout4Section;