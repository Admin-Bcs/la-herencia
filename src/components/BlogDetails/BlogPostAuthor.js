import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogPostAuthor extends Component {

    render() {
        return (
            <main>
                <div className="author mt-80 mb-40">
                    <div className="author-img text-center">
                        <img src="assets/img/blog/details/author.png" alt="" />
                    </div>
                    <div className="author-text text-center">
                        <h3>MD. Salim Rana</h3>
                        <div className="author-icon">
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequa aute irure dolor. </p>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostAuthor;

