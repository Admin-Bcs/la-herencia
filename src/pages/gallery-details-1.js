import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryDetailsOneMain from "../components/GalleryDetailsOne/GalleryDetailsOneMain";

class GalleryDetails1 extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery Details" />
                <GalleryDetailsOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryDetails1;
