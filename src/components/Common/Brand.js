import React, { Component } from 'react';
import Slider from "react-slick";

const Brand = () => {

	const brandSettings = {
		className: "brand-active",
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	};

	return (
		<div className="brand-area">
			<div className="container">
				<div className="brand-bg pt-80 pb-80" style={{ backgroundImage: `url(${'assets/img/bg/bg5.jpg'})` }}>
					<div className="row">
						<div className="col-xl-12">
							<div className="brand-active">
								<Slider {...brandSettings}>
									<div className="col-xl-12">
										<div className="features-img">
											<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/laherencia.png")} alt="brand" />
										</div>
									</div>
									<div className="col-xl-12">
										<div className="features-img">
											<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Bersys.png")} alt="brand" />
										</div>
									</div>
									<div className="col-xl-12">
										<div className="features-img">
											<img src={require("../../../public/assets/img/logo/laherencia/Categoryimg/Claudio.png")} alt="brand" />
										</div>
									</div>

								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Brand;