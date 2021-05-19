import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";
import ScrollToTop from "../Scrolltotop";
/* LaHerencia */

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
            <ScrollToTop />
            
                <HomeMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
