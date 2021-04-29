import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import GalleryDetailsThreeMain from "../components/GalleryDetailsThree/GalleryDetailsThreeMain";

class GalleryDetails3 extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Gallery Details" />
                <GalleryDetailsThreeMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GalleryDetails3;
