import React, {Component} from 'react';

class H1GallerySection extends Component {
	render() {
		return (
			<div className="gallery-area pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt=""/>
								</div>
								<h1>Zomata Gallery</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt
									ut
									labore et dolore magna aliqua enim minim veniam
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery1.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery1.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery2.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery2.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery3.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery3.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery4.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery4.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery5.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery5.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery6.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery6.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery7.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery7.jpg")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/gallery8.jpg")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/gallery/gallery8.jpg")}>
											<i className="ti-plus"></i>
										</a>
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

export default H1GallerySection;