import React, { Component } from "react";

import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopBersysMain  from "../components/Shop/ShopBersysMain";
import Header from "../components/Layout/Header/Header";

class ShopBersys extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Product Page" />
                <ShopBersysMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopBersys;
