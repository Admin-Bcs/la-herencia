import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class GPGalleryDetailsThreeSection extends Component {
	render() {
		return (
			<div className="gallery-layout-area pt-120 pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-7 col-md-7 mb-30">
							<div className="gallery-peralux-img mb-60">
								<img src={require('../../../public/assets/img/gallery/gallery-custom/01.jpg')}
								     alt="image"/>
							</div>
							<div className="gallery-peralux-img mb-60">
								<img src={require('../../../public/assets/img/gallery/gallery-custom/02.jpg')}
								     alt="image"/>
							</div>
							<div className="gallery-peralux-img mb-60">
								<img src={require('../../../public/assets/img/gallery/gallery-custom/03.jpg')}
								     alt="image"/>
							</div>
							<div className="gallery-peralux-img">
								<img src={require('../../../public/assets/img/gallery/gallery-custom/04.jpg')}
								     alt="image"/>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-5 mb-30">
							<div className="gallery-peralux-wrapper">
								<div className="gallery2-layout-text">
									<h1>Natural Fresh Tomato</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
										omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
										rem aperiam, eaque ipsa quae ab illo inventore </p>
								</div>
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
								<div className="gallery-post-tag">
									<span>Project Tags : </span>
									<a href="#">Organic,</a>
									<a href="#">mata,</a>
									<a href="#">Food, </a>
									<a href="#">Fruits </a>
								</div>
								<div className="gallery-share-icon">
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
		);
	}
}

export default GPGalleryDetailsThreeSection;