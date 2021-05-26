import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

class GPGalleryThreeSection extends Component {
	render() {
		return (
			<div className="gallery-area pt-120 pb-110">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="gallery-wrapper mb-60">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery3/1.jpg')}
										     alt="image"/>
									</a>
									<div className="gallery-content text-center">
										<div className="gallery2-icon">
											<a className="popup-image"
											   href={require('../../../public/assets/img/gallery/gallery3/1.jpg')}>
												<i className="ti-plus"></i>
											</a>
										</div>
										<h1><Link href="#" as="#" ><a >Organic Fruits</a></Link></h1>
										<span>Fresh Food</span>
									</div>
								</div>
							</div>
							<div className="gallery-wrapper mb-60">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery3/2.jpg')}
										     alt="image"/>
									</a>
									<div className="gallery-content text-center">
										<div className="gallery2-icon">
											<a className="popup-image"
											   href={require('../../../public/assets/img/gallery/gallery3/2.jpg')}>
												<i className="ti-plus"></i>
											</a>
										</div>
										<h1><Link href="#" as="#" ><a >Organic Fruits</a></Link></h1>
										<span>Fresh Food</span>
									</div>
								</div>
							</div>
							<div className="gallery-wrapper mb-60">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery3/3.jpg')}
										     alt="image"/>
									</a>
									<div className="gallery-content text-center">
										<div className="gallery2-icon">
											<a className="popup-image"
											   href={require('../../../public/assets/img/gallery/gallery3/3.jpg')}>
												<i className="ti-plus"></i>
											</a>
										</div>
										<h1><Link href="#" as="#" ><a >Organic Fruits</a></Link></h1>
										<span>Fresh Food</span>
									</div>
								</div>
							</div>
							<div className="gallery-wrapper mb-60">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery3/4.jpg')}
										     alt="image"/>
									</a>
									<div className="gallery-content text-center">
										<div className="gallery2-icon">
											<a className="popup-image"
											   href={require('../../../public/assets/img/gallery/gallery3/4.jpg')}>
												<i className="ti-plus"></i>
											</a>
										</div>
										<h1><Link href="#" as="#" ><a >Organic Fruits</a></Link></h1>
										<span>Fresh Food</span>
									</div>
								</div>
							</div>
							<div className="gallery-wrapper mb-60">
								<div className="gallery-img">
									<a href="#">
										<img src={require('../../../public/assets/img/gallery/gallery3/5.jpg')}
										     alt="image"/>
									</a>
									<div className="gallery-content text-center">
										<div className="gallery2-icon">
											<a className="popup-image"
											   href={require('../../../public/assets/img/gallery/gallery3/5.jpg')}>
												<i className="ti-plus"></i>
											</a>
										</div>
										<h1><Link href="#" as="#" ><a >Organic Fruits</a></Link></h1>
										<span>Fresh Food</span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12">
									<div className="paginations text-center">
										<ul>

											<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-left']}/></a></li>
											<li className="active"><a href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#"><FontAwesomeIcon icon={['fas', 'angle-right']}/></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GPGalleryThreeSection;