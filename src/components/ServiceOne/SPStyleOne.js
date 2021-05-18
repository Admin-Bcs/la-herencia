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
                                <h1>La Herencia</h1>
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
            </div>
        );
    }
}
