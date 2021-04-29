import React, {Component} from 'react';
import Link from "next/link";

class ErrorSection extends Component {
	render() {
		return (
			<div className="four-zero-area pt-100 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="four-zero-wrapper text-center">
								<div className="four-zero-img">
									<img src={require('../../../public/assets/img/bg/404.jpg')} alt="image"/>
								</div>
								<div className="four-zero-text">
									<h1>Page Not Found</h1>
									<Link href="/" as="/" ><a className="btn">Go To Home</a></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorSection;