import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogPostRelated extends Component {

    render() {
        return (
            <main>
                <div className="row mt-50">
                    <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                        <div className="blog-post-tag">
                            <span>Releted Tags</span>
                            <a href="#">organic</a>
                            <a href="#">Foods</a>
                            <a href="#">tasty</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                        <div className="blog-share-icon text-left text-md-right">
                            <span>Share: </span>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                            <a href="https://www.instagram.com/laherenciaspices"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostRelated;

