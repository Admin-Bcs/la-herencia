import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryTwoMain from "../components/GalleryTwo/GalleryTwoMain";

class GalleryTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery 02" />
                <GalleryTwoMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryTwo;
