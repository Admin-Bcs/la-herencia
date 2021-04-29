import React, { Component } from 'react';
import Brand from "../Common/Brand";
import TeamSection from "./TeamSection";
import GPCtaSection from "../GalleryOne/GPCtaSection";

class Team extends Component {
    render() {
        return (
            <main>
                {/* cta-start */}
                <TeamSection />
                {/* cta-end */}

                {/* cta-start */}
                <GPCtaSection />
                {/* cta-end */}

                {/* brand-start */}
                <Brand/>
                {/* brand-end */}
            </main>
        );
    }
}

export default Team;