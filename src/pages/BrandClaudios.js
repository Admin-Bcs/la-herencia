import React, { Component } from "react";
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceOneMain from "../components/ServiceOne/ServiceMainClaudios";

class Brand extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Claudio's" />
                <ServiceOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Brand;
