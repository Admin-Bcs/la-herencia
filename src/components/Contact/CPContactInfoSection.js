import React, {Component} from 'react';

class CPContactInfoSection extends Component {
	render() {
		return (
			<div className="contact-address-area pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>London</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li>82 Bernie Greens Apt. 210, <br/> Hendon Way, London, UK</li>
									<li>zomata@example.com</li>
									<li>+53 213 5941 295</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>New York</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li>205 Bernie Greens Apt. 210, <br/> Hendon Way, London, UK</li>
									<li>zomata@example.com</li>
									<li>+53 213 5941 295</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>Paris</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li>82 Bernie Greens Apt. 210, <br/> Hendon Way, London, UK</li>
									<li>zomata@example.com</li>
									<li>+53 213 5941 295</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CPContactInfoSection;