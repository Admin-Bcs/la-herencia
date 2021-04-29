import React, { Component } from 'react';

class BlogPostArrow extends Component {

    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-12">
                        <div className="navigation-border pt-50 mt-40"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="bakix-navigation b-next-post text-left mb-30">
                            <span><a href="#">Next Post</a></span>
                            <h4><a href="#">Tips on Minimalist</a></h4>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                            <span><a href="#">Next Post</a></span>
                            <h4><a href="#">Tips on Minimalist</a></h4>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostArrow;

