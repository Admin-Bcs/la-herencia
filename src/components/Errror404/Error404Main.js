import React, { Component } from 'react';
import Brand from "../Common/Brand";
import ErrorSection from "./ErrorSection";

class Error404Main extends Component {
    render() {
        return (
            <main>
                {/* cta-start */}
                <ErrorSection />
                {/* cta-end */}

                {/* brand-start */}
                <Brand/>
                {/* brand-end */}
            </main>
        );
    }
}

export default Error404Main;