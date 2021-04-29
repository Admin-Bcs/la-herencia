import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


class GalleryTabOne extends Component {
	render() {
		return (
			<div className="gallery-area pt-125 pb-90">
				<div className="container-fluid">
					<Tabs className="row" selectedTabClassName="active">
						<div className="col-xl-12">
							<TabList className="portfolio-menu mb-70 text-center">
								<Tab>All</Tab>
								<Tab>Vegetables</Tab>
								<Tab>Orange</Tab>
								<Tab>Shallot</Tab>
								<Tab>Pumpkin</Tab>
							</TabList>
						</div>

						<TabPanel className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery1.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery1.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery2.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery2.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery3.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery3.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery4.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery4.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery5.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery6.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery6.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery7.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery7.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery8.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery8.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery9.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery9.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery10.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery10.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery11.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery12.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery12.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery12.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery1.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery1.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery2.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery2.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery5.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery3.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery3.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery4.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery4.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery5.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery6.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery6.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery2.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery2.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery7.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery7.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery5.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery8.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery8.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery9.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery9.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery10.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery10.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery11.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery12.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery5.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="gallery-wrapper mb-30">
										<div className="gallery-img">
											<a href="#">
												<img src={require('../../../../public/assets/img/gallery/gallery12.jpg')} alt='image' />
											</a>
											<div className="gallery-icon">
												<a className="popup-image" href="img/gallery/gallery12.jpg"><i className="ti-plus"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default GalleryTabOne;


