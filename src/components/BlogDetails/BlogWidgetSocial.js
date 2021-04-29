import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogWidgetSocial extends Component {

    render() {
        return (
            <main>
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
            </main>
        );
    }
}


export default BlogWidgetSocial;

