import React, { Component } from "react";
import SPProductSectionHerencia from "./SPProductSectionHerencia";
import Brand from "../Common/Brand";

class ShopHerenciaMain extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPProductSectionHerencia />
                {/* sp-style-one-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default ShopHerenciaMain;
