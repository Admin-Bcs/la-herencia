import React, { Component } from 'react';

class H1GallerySection extends Component {
	render() {
		return (
			<div className="gallery-area pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="" />
								</div>
								<h1>La Herencia Gallery</h1>
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
									<a href="#"><img src={require("../../../public/assets/img/gallery/Garlic.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Garlic.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Ginger.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Ginger.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Italian.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Italian.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Pumpkin.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Pumpkin.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Garlic2.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Garlic2.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Ginger2.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Ginger2.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Italian2.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Italian2.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/gallery/Pumpkin2.png")}
										alt="" /></a>
									<div className="gallery-icon">
										<a className="popup-image"
											href={require("../../../public/assets/img/gallery/Pumpkin2.png")}>
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