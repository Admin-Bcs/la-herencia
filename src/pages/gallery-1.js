import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryOneMain from "../components/GalleryOne/GalleryOneMain";

class Gallery extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery 01" />
                <GalleryOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Gallery;
