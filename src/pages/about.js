import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/FooterStyleTwo";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AboutMain from "../components/About/AboutMain";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="About Us" />
                <AboutMain />
                <Footer />
            </React.Fragment>
        );
    }
}
export default About;
