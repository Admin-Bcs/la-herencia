import React, { Component } from "react";
import Brand from "../Common/Brand";
import GPCtaSection from "../GalleryOne/GPCtaSection";
import GPGalleryThreeSection from "./GPGalleryThreeSection";

export default class GalleryThreeMain extends Component {
    render() {
        return (
            <main>
                {/* Gallery-start */}
                <GPGalleryThreeSection />
                {/* Gallery-end */}

                {/* cta-start */}
                <GPCtaSection />
                {/* cta-end */}

                {/* brand-start */}
                <Brand />
                {/* brand-end */}
            </main>
        );
    }
}
