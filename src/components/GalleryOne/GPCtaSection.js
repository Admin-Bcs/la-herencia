import React, { Component } from 'react'
import Link from "next/link";

export default class GPCtaSection extends Component {
    render() {
        return (
            <div className="cta-area pb-120">
                <div className="container">
                    <div className="cta-bg pt-100 pb-90" style={{ backgroundImage:`url(${'assets/img/bg/bg17.jpg'})`}}>
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="cta-wrapper mb-15">
                                    <div className="cta-img">
                                        <img src={require('../../../public/assets/img/shape/3.png')} alt='image' />
                                    </div>
                                    <div className="cta-text">
                                        <h1>Work With Zomata</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="cta-button mb-15 text-md-right">
                                    <Link href="/contact" as="/contact" >
                                        <a className="btn">Join With Us</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
