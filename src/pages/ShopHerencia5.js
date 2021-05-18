import React, { Component } from "react";

import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopHerenciaMain from "../components/Shop/ShopHerenciaMain5";
import Header from "../components/Layout/Header/Header";

class ShopHerencia extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Products" />
                <ShopHerenciaMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopHerencia;
