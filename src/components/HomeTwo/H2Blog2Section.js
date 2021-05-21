import React, {Component} from 'react';
import Link from "next/link";

class H2Blog2Section extends Component {
	render() {
		return (
			<div className="blog-area-2 pt-110 pb-90" style={{ backgroundImage:`url(${'assets/img/bg/bg10.jpg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt='shape' />
								</div>
								<h1>Zomata Blog</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
							<div className="blog-bg">
								<div className="row">
									<div className="col-xl-6 col-lg-12">
										<div className="news-img">
											<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." >
												<a>
													<img src={require('../../../public/assets/img/blog/1.jpg')} alt='blog' />
												</a>
											</Link>
										</div>
									</div>
									<div className="col-xl-6 col-lg-12">
										<div className="blog-text news-text">
											<h4>
												<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." >
													<a>
														Monthly Web Development Was Update Just TimeDesign Variable Fallbacks Zomata.
													</a>
												</Link>
											</h4>
											<div className="blog-meta">
												<span><i className="dripicons-user"></i>Perales</span>
												<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
												<span><i className="dripicons-conversation"></i>(02)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
							<div className="blog-bg">
								<div className="row">
									<div className="col-xl-6 col-lg-12">
										<div className="news-img">
											<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." >
												<a>
													<img src={require('../../../public/assets/img/blog/2.jpg')} alt='blog' />
												</a>
											</Link>
										</div>
									</div>
									<div className="col-xl-6 col-lg-12">
										<div className="blog-text news-text">
											<h4>
												<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cr-software-landing." >
													<a>
														How To Build A Virtual Reality Is See Model With A Real-Time Cr Software Landing.
													</a>
												</Link>
											</h4>
											<div className="blog-meta">
												<span><i className="dripicons-user"></i>Perales</span>
												<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
												<span><i className="dripicons-conversation"></i>(02)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
							<div className="blog-bg">
								<div className="row">
									<div className="col-xl-6 col-lg-12">
										<div className="news-img">
											<Link href="/practical-suggestions-to-imes-prove-usability-of-landin-pages-wite-right-places." as="/practical-suggestions-to-imes-prove-usability-of-landin-pages-wite-right-places." >
												<a>
													<img src={require('../../../public/assets/img/blog/3.jpg')} alt='blog' />
												</a>
											</Link>
										</div>
									</div>
									<div className="col-xl-6 col-lg-12">
										<div className="blog-text news-text">
											<h4>
												<Link href="/practical-suggestions-to-imes-prove-usability-of-landin-pages-wite-right-places." as="/practical-suggestions-to-imes-prove-usability-of-landin-pages-wite-right-places." >
													<a>
														Practical Suggestions To Imes prove Usability Of Landin Pages Wite Right Places.
													</a>
												</Link>
											</h4>
											<div className="blog-meta">
												<span><i className="dripicons-user"></i>Perales</span>
												<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
												<span><i className="dripicons-conversation"></i>(02)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
							<div className="blog-bg">
								<div className="row">
									<div className="col-xl-6 col-lg-12">
										<div className="news-img">
											<Link href="#" >
												<a>
													<img src={require('../../../public/assets/img/blog/4.jpg')} alt='blog' />
												</a>
											</Link>
										</div>
									</div>
									<div className="col-xl-6 col-lg-12">
										<div className="blog-text news-text">
											<h4>
												<Link href="#" >
													<a>
														Monthly Web Development Was Update Just TimeDesign Variable Fallbacks Zomata.
													</a>
												</Link>
											</h4>
											<div className="blog-meta">
												<span><i className="dripicons-user"></i>Perales</span>
												<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
												<span><i className="dripicons-conversation"></i>(02)</span>
											</div>
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

export default H2Blog2Section;