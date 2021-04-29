import React, {Component} from 'react';
import Link from "next/link";

class H2Cta2Section extends Component {
	render() {
		return (
			<div className="cta-area pt-160 pb-160" style={{ backgroundImage:`url(${'assets/img/bg/bg7.jpg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="cta2-wrapper" style={{ backgroundImage:`url(${'assets/img/bg/1.png'})`}}>
								<div className="cta2-text text-center">
									<h1>We Provide Fresh Food <br/> For Your Family</h1>
									<Link href="/shop" as="/shop" >
										<a className="btn">
											View Our Shop
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H2Cta2Section;