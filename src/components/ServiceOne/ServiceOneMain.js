import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SPStyleOne from "./SPStyleOne";
import SPStyleTwo from "./SPStyleTwo";
import SPVideoSection from "./SPVideoSection";
import SPAboutSection from "./SPAboutSection";
import SPPricing from "./SPPricing";
import Brand from '../Common/Brand';

class ServiceOneMain extends Component {
    render() {
        return (
            <main>
                {/* sp-style-one-start */}
                <SPStyleOne />
                {/* sp-style-one-end */}

                {/* sp-style-two-start */}
                <SPStyleTwo />
                {/* sp-style-two-end */}

                {/* sp-video-start */}
                <SPVideoSection />
                {/* sp-video-end */}

                {/* sp-about-start */}
                <SPAboutSection />
                {/* sp-about-end */}

                {/* sp-pricing-start */}
                <SPPricing />
                {/* sp-pricing-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}

export default ServiceOneMain;
