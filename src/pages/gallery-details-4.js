import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryDetailsFourMain from "../components/GalleryDetailsFour/GalleryDetailsFourMain";

class GalleryDetails4 extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery Details" />
                <GalleryDetailsFourMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryDetails4;
