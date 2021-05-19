import React, { Component } from "react";

import SPStyleOne from "./SPStyleOne";

import SPVideoSection from "./SPVideoSection";
import SPAboutSection from "./SPAboutSection";


class ServiceMainHerencia extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPStyleOne />
                {/* sp-style-one-end */}
            </main>
        );
    }
}

export default ServiceMainHerencia;
