import React from 'react';
import Link from "next/link";

const H3About3Section = () => {
    return (
        <div className="about-us-area about-shape pt-120 pb-90">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="about-text mb-30">
							<span>about us</span>
							<h1>We're Zomata Team Organic Expert.</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							<Link href="/about" as="/about" >
								<a className="btn">
									Learn More
								</a>
							</Link>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="about-img mb-30">
                            <img src={require('../../../public/assets/img/about/2.jpg')} alt='image' />
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default H3About3Section;