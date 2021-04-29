import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class GPGalleryDetailsTwoSection extends Component {
	render() {
		return (
			<div className="gallery-layout-area pt-120 pb-105">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="gallery-layout-wrapper">
								<div className="gallery-layout-img">
									<img src={require('../../../public/assets/img/gallery/gallery-custom/4.jpg')}
									     alt="image"/>
								</div>
								<div className="row mb-20">
									<div className="col-xl-4 col-lg-4  mb-30">
										<div className="gallery2-layout-bg"
										     style={{backgroundImage: `url(${'assets/img/gallery/gallery-custom/3.jpg'})`}}>
											<div className="gallery-layout-info">
												<span>Clients:</span>
												<h5>PitarRhodus</h5>
											</div>
											<div className="gallery-layout-info">
												<span>Date</span>
												<h5>05 Jan 2019</h5>
											</div>
											<div className="gallery-layout-info">
												<span>Role</span>
												<h5>Organic Food</h5>
											</div>
											<div className="gallery-layout-info">
												<span>View Site</span>
												<h5>https://zomataorganic.com/</h5>
											</div>
										</div>
									</div>
									<div className="col-xl-8 cl-lg-8 mb-30">
										<div className="gallery2-layout-text">
											<h1>Natural Fresh Tomato</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
												veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
												occaecat cupidatat non proident, sunt in culpa qui officia deserunt
												mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
												error sit voluptatem accusantium doloremque laudantium, totam rem
												aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
												beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
												voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
												dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
												est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
												sed quia non numquam eius modi tempora incidunt ut labore et dolore
												magnam aliquam quaerat voluptatem.</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xl-7 col-lg-7 col-md-6">
										<div className="gallery-post-tag">
											<span>Project Tags : </span>
											<a href="#">Organic,</a>
											<a href="#">mata,</a>
											<a href="#">Food, </a>
											<a href="#">Fruits </a>
										</div>
									</div>
									<div className="col-xl-5 col-lg-5 col-md-6">
										<div className="gallery-share-icon text-left text-md-right">
											<span>Project Share : </span>
											<a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
											<a href="#"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
											<a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
											<a href="#"><FontAwesomeIcon icon={['fab', 'youtube']}/></a>
											<a href="#"><FontAwesomeIcon icon={['fab', 'behance']}/></a>
										</div>
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

export default GPGalleryDetailsTwoSection;