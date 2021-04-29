import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryDetailsTwoMain from "../components/GalleryDetailsTwo/GalleryDetailsTwoMain";

class GalleryDetails2 extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery Details" />
                <GalleryDetailsTwoMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryDetails2;
