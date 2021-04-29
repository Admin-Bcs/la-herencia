import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from "next/link";

class GPGalleryReletedSection extends Component {
	render() {
		return (
			<div className="gallery-area pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt="image" />
								</div>
								<h1>Releted Project</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor
									incididunt ut labore et dolore magna aliqua enim minim veniam</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery2/1.jpg')} alt="image" />
									</a>
									<div className="gallery-icon">
										<a className="popup-image" href={require('../../../public/assets/img/gallery/gallery2/1.jpg')}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
								<div className="gallery-text gallery2-text text-center">
									<h3><Link href="/services-details" as="/services-details" ><a >Fresh Orange</a></Link></h3>
									<span>Organic Fruits</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery2/2.jpg')} alt="image" />
									</a>
									<div className="gallery-icon">
										<a className="popup-image" href={require('../../../public/assets/img/gallery/gallery2/2.jpg')}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
								<div className="gallery-text gallery2-text text-center">
									<h3><Link href="/services-details" as="/services-details" ><a >Fresh Strawberry</a></Link></h3>
									<span>Organic Fruits</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery2/3.jpg')} alt="image" />
									</a>
									<div className="gallery-icon">
										<a className="popup-image" href={require('../../../public/assets/img/gallery/gallery2/2.jpg')}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
								<div className="gallery-text gallery2-text text-center">
									<h3><Link href="/services-details" as="/services-details" ><a >Orange Tomato</a></Link></h3>
									<span>Vegetables</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GPGalleryReletedSection;