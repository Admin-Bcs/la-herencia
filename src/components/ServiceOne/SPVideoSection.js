import React, { Component } from "react";

export default class SPVideoSection extends Component {
    render() {
        return (
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
        );
    }
}
