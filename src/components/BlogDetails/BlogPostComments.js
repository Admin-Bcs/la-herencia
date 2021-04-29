import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogComments extends Component {

    render() {
        return (
            <main>
                <div className="post-comments">
                    <div className="blog-coment-title mb-30">
                        <h2>03 Comments</h2>
                    </div>
                    <div className="latest-comments">
                        <ul>
                            <li>
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <img src="assets/img/blog/details/comments1.png" alt="" />
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h5>Karon Balina</h5>
                                            <span>19th May 2018</span>
                                            <a className="reply" href="#"><i><FontAwesomeIcon icon={['fas', 'reply']} /></i>Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="children">
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <img src="assets/img/blog/details/comments1.png" alt="" />
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h5>Julias Roy</h5>
                                            <span>19th May 2018</span>
                                            <a className="reply" href="#"><i><FontAwesomeIcon icon={['fas', 'reply']} /></i>Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                                ullamco laboris nisi ut aliquip.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <img src="assets/img/blog/details/comments2.png" alt="" />

                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h5>Arista Williamson</h5>
                                            <span>19th May 2018</span>
                                            <a className="reply" href="#"><i><FontAwesomeIcon icon={['fas', 'reply']} /></i>Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogComments;

