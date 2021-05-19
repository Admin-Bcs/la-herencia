import React, { Component } from "react";

export default class SPStyleOne extends Component {
    render() {
        return (
            <div className="our-service-area pt-120 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="our-service-img mb-30">
                                <img
                                    src={require("../../../public/assets/img/service/1.png")}
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-7">
                            <div className="our-service-text mb-30">
                                <h1>Bersy’s Brand</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="video-area pt-360 pb-360"
                    style={{ backgroundImage: `url(${"assets/img/bg/bg16.jpg"})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="video-icon text-center">
                                    <a
                                        className="popup-video"
                                        href="#"
                                    >
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />
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
                                        Bersy’s <br />
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
