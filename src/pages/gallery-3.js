import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryThreeMain from "../components/GalleryThree/GalleryThreeMain";

class GalleryThree extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery 03" />
                <GalleryThreeMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryThree;
