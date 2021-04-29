import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogWidgetAbout extends Component {

    render() {
        return (
            <main>
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
            </main>
        );
    }
}

export default BlogWidgetAbout;

