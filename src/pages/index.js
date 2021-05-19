import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";

/* LaHerencia */

class Index extends Component {
    render() {
        return (
            <React.Fragment>
            
                <Header />
            
                <HomeMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
