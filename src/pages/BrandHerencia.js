import React, { Component } from "react";
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceOneMain from "../components/ServiceOne/ServiceMainHerencia";

class Brand extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="La Herencia Spices" />
                <ServiceOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Brand;
