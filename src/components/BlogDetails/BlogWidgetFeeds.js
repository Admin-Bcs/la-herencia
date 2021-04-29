import React, { Component } from 'react';

class BlogWidgetFeeds extends Component {

    render() {
        return (
            <main>
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
                                <h6 className="widget-posts-title">
                                    <a href="#">Lorem ipsum dolor sit cing elit, sed do.</a>
                                </h6>
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
                                <h6 className="widget-posts-title">
                                    <a href="#">Lorem ipsum dolor sit cing elit, sed do.</a>
                                </h6>
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
                                <h6 className="widget-posts-title">
                                    <a href="#">Lorem ipsum dolor sit cing elit, sed do.</a>
                                </h6>
                                <div className="widget-posts-meta">October 28, 2018 </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}


export default BlogWidgetFeeds;

