import React, { Component } from "react";

export default class SPAboutSection extends Component {
    render() {
        return (
            <div className="zomata-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 cl-md-6">
                            <div className="zomata-img mb-30">
                                <img
                                    src={require("../../../public/assets/img/bg/4.png")}
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 cl-md-6">
                            <div className="zomata-wrapper mb-30">
                                <div className="zomata-text">
                                    <h1>
                                        Zomata Organic <br /> Going Green
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
