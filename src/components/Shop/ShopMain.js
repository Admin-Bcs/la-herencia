import React, { Component } from "react";
import SPProductSection from "./SPProductSection";
import Brand from "../Common/Brand";

class Shop extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPProductSection />
                {/* sp-style-one-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default Shop;
