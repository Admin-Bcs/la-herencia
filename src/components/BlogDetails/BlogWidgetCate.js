import React, { Component } from 'react';

class BlogWidgetCate extends Component {

    render() {
        return (
            <main>
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
            </main>
        );
    }
}

export default BlogWidgetCate;

