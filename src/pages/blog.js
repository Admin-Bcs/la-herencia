import React from "react";
import { connect } from "react-redux";
import Header from "../components/Layout/Header/Header";
import BlogMain from "../components/Blog/BlogMain";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import Footer from "../components/Layout/Footer/FooterStyleTwo";


class Blog extends React.Component {
    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Blog Sidebar" />
                <BlogMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;
