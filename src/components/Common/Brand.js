import React, {Component} from 'react';
import Slider from "react-slick";

const Brand = () => {

	const brandSettings = {
		className: "brand-active",
		dots: false,
		arrows: false,
		centerMode: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
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
				<div className="brand-bg pt-80 pb-80" style={{backgroundImage: `url(${'assets/img/bg/bg5.jpg'})`}}>
					<div className="row">
						<div className="col-xl-12">
							<div className="brand-active">
								<Slider {...brandSettings}>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/1.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/2.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/3.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/4.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/5.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/1.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/2.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/3.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/4.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/5.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/1.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/2.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/3.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/4.png")} alt="brand"/>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="brans-img text-center">
											<img src={require("../../../public/assets/img/brand/5.png")} alt="brand"/>
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