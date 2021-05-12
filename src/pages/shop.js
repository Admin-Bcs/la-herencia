import React, { Component } from "react";

import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopMain from "../components/Shop/ShopMain";
import Header from "../components/Layout/Header/Header";

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Product Page" />
                <ShopMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Shop;
