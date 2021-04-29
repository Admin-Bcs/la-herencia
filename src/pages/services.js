import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceOneMain from "../components/ServiceOne/ServiceOneMain";

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Our Services" />
                <ServiceOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;
