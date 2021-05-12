import React, { Component } from "react";

import Footer from "../components/Layout/Footer/FooterStyleTwo";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AboutMain from "../components/About/AboutMain";
import Header from "../components/Layout/Header/Header";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="About Us" />
                <AboutMain />
                <Footer />
            </React.Fragment>
        );
    }
}
export default About;
