import React, { Component } from 'react';

class BlogCommentsForm extends Component {

    render() {
        return (
            <main>
                <div className="post-comments-form">
                    <div className="post-comments-title">
                        <h2>Post Comments</h2>
                    </div>
                    <form id="contacts-form" className="conatct-post-form" action="#">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-message">
                                    <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Your Comments...."></textarea>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-name">
                                    <input type="text" placeholder="Your Name.... " />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-email">
                                    <input type="email" placeholder="Your Email...." />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-icon contacts-website">
                                    <input type="text" placeholder="Your Website...." />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <button className="btn" type="submit"> <span className="btn-text">Post comment <i className="far fa-long-arrow-right"></i></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}


export default BlogCommentsForm;

