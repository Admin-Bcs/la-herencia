import React, { Component } from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopMain from "../components/Shop/ShopMain";

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleTwo />
                <SiteBreadcrumb pageTitle="Product Page" />
                <ShopMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Shop;
