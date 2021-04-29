import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArticleLayout from '../Common/ArticleLayout';
import posts from '../../sample-data/blog-posts/posts.json';

class BlogMain extends Component {

    render() {

        return (
            <main>
	            <section className="blog-area gray-bg pt-120 pb-80">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-lg-8">
	                        	{posts && posts.map((post, i) => (
	                            	<div key={i}>
	                            	<ArticleLayout post={post} />
	                            	</div>
	                        	))}
	                        </div>

	                        <div className="col-lg-4">
								<div className="widget mb-40">
									<div className="widget-title-box mb-30">
										<span className="animate-border"></span>
										<h3 className="widget-title">Search Objects</h3>
									</div>
									<form className="search-form">
										<input type="text" placeholder="Search your keyword..." />
										<button type="submit"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></button>
									</form>
								</div>
	                            <div className="widget mb-40">
	                                <div className="widget-title-box mb-30">
	                                    <span className="animate-border"></span>
	                                    <h3 className="widget-title">About Me</h3>
	                                </div>
	                                <div className="about-me text-center">
	                                    <img src="assets/img/blog/details/me.png" alt="" />
	                                    <h4>Zulia Maron Duo</h4>
	                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
	                                    <div className="widget-social-icon">
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
	                                    </div>
	                                </div>
	                            </div>

								<div className="widget mb-40">
									<div className="widget-title-box mb-30">
										<span className="animate-border"></span>
										<h3 className="widget-title">Popular Feeds</h3>
									</div>
									<ul className="recent-posts">
											<li>
												<div className="widget-posts-image">
													<a href="#">
														<img src={require('../../../public/assets/img/blog/details/img1.jpg')} alt='image' />
													</a>
												</div>
												<div className="widget-posts-body">
													<h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
															cing elit, sed do.</a></h6>
													<div className="widget-posts-meta">October 18, 2018 </div>
												</div>
											</li>
										<li>
											<div className="widget-posts-image">
												<a href="#">
												<img src={require('../../../public/assets/img/blog/details/img2.jpg')} alt='image' />
												</a>
											</div>
											<div className="widget-posts-body">
												<h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
														cing elit, sed do.</a></h6>
												<div className="widget-posts-meta">October 24, 2018 </div>
											</div>
										</li>
										<li>
											<div className="widget-posts-image">
												<a href="#">
												<img src={require('../../../public/assets/img/blog/details/img3.jpg')} alt='image' />
												</a>
											</div>
											<div className="widget-posts-body">
												<h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
														cing elit, sed do.</a></h6>
												<div className="widget-posts-meta">October 28, 2018 </div>
											</div>
										</li>
									</ul>
                            	</div>

								<div className="widget mb-40">
									<div className="widget-title-box mb-30">
										<span className="animate-border"></span>
										<h3 className="widget-title">Categories</h3>
									</div>
									<ul className="cat">
										<li>
											<a href="#">Lifestyle <span className="f-right">78</span></a>
										</li>
										<li>
											<a href="#">Travel <span className="f-right">42</span></a>
										</li>
										<li>
											<a href="#">Fashion <span className="f-right">32</span></a>
										</li>
										<li>
											<a href="#">Music <span className="f-right">85</span></a>
										</li>
										<li>
											<a href="#">Branding <span className="f-right">05</span></a>
										</li>
									</ul>
								</div>
								<div className="widget mb-40">
									<div className="widget-title-box mb-30">
										<span className="animate-border"></span>
										<h3 className="widget-title">Social Profile</h3>
									</div>
									<div className="social-profile">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
									</div>
								</div>
								<div className="widget mb-40">
									<div className="widget-title-box mb-30">
										<span className="animate-border"></span>
										<h3 className="widget-title">Instagram Feeds</h3>
									</div>
									<div className="tag">
										<a href="#">Popular</a>
										<a href="#">desgin</a>
										<a href="#">usability</a>
										<a href="#">develop</a>
										<a href="#">consult</a>
										<a href="#">icon</a>
										<a href="#">HTML</a>
										<a href="#">ux</a>
										<a href="#">business</a>
										<a href="#">kit</a>
										<a href="#">keyboard</a>
										<a href="#">tech</a>
									</div>
								</div>
								<div className="widget mb-40 b-0">
									<div className="banner-widget">
										<a href="#"><img src="assets/img/blog/details/banner.jpg" alt="" /></a>
									</div>
								</div>
	                        </div>
	                    </div>
	                </div>
	            </section>
			</main>
        );
    }
}

export default BlogMain;