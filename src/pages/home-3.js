import React, { Component } from "react";
import HomeThreeMain from "../components/HomeThree/HomeThreeMain";
import FooterStyleThree from "../components/Layout/Footer/FooterStyleThree";
import Header3 from "../components/Layout/Header/HeaderStyleThree";

class HomeThree extends Component {
    render() {
        return (
            <React.Fragment>
                <Header3 />
                <HomeThreeMain />
                <FooterStyleThree />
            </React.Fragment>
        );
    }
}

export default HomeThree;
