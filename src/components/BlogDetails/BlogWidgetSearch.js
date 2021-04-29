import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogWidgetSearch extends Component {

    render() {
        return (
            <main>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Search Objects</h3>
                    </div>
                    <form className="search-form">
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></button>
                    </form>
                </div>
            </main>
        );
    }
}


export default BlogWidgetSearch;

