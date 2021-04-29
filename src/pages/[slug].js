import React from 'react';
import { connect } from 'react-redux';
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";

import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
import Footer from "../components/Layout/Footer/FooterStyleTwo";

class Blog extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <BlogDetailsMain />
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);

