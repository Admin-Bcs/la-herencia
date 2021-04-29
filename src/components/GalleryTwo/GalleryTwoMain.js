import React, { Component } from "react";
import Brand from "../Common/Brand";
import GPCtaSection from "../GalleryOne/GPCtaSection";
import GpGalleryTwoSection from "./GPGalleryTwoSection";

export default class GalleryTwoMain extends Component {
    render() {
        return (
            <main>
                {/* gallery-start */}
                <GpGalleryTwoSection />
                {/* gallery-end */}

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
