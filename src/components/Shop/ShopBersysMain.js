import React, { Component } from "react";
import SPProductSectionBersys from "./SPProductSectionBersys";
import Brand from "../Common/Brand";

class ShopBersysMain extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPProductSectionBersys />
                {/* sp-style-one-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default ShopBersysMain;
