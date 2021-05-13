import React, { Component } from "react";
import SPProductSectionClaudio from "./SPProductSectionClaudio";
import Brand from "../Common/Brand";

class ShopClaudioMain extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPProductSectionClaudio />
                {/* sp-style-one-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default ShopClaudioMain;
