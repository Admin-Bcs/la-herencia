import React, { Component } from "react";

import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopClauidioMain  from "../components/Shop/ShopClauidioMain";
import Header from "../components/Layout/Header/Header";

class ShopClaudio extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Product Page" />
                <ShopClauidioMain/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopClaudio;
