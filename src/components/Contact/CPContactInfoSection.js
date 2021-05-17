import React, {Component} from 'react';
import Link from 'next/link';



class CPContactInfoSection extends Component {
	render() {
		return (
			<div className="contact-address-area pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>ADDRESS</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li>La Herencia Spices </li>
									<li>WAREHOUSE </li>
									<li> 422 11th St. Union City, NJ 07087</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>NEW JERSEY</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li>Tel: 201-223-6809 </li>
									<li>Fax:</li>
									<li>services@laherenciaspices.com</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="contact-address-wrapper mb-30">
								<div className="contact-address-title">
									<h2>SOCIAL MEDIA</h2>
									<div className="contact-address-img">
										<img src={require('../../../public/assets/img/shape/c.png')} alt="image"/>
									</div>
								</div>
								<ul className="contact-link">
									<li><Link href="https://www.facebook.com/ " target='_blank' ><a >• facebook <i className="fab fa-facebook" > </i></a></Link> <br /></li>
									<li><Link href="https://www.instagram.com/laherenciaspices" target='_blank' ><a >• instagram <i className="fab fa-instagram" > </i></a></Link><br /></li>
									<li><Link href="https://www.pinterest.com/Laherenciaspices/" target='_blank' ><a >• Pinterest <i className="fab fa-pinterest" > </i></a></Link></li>
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