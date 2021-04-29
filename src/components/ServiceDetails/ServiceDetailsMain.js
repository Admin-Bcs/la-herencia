import React, {Component} from "react";
import Brand from "../Common/Brand";
import SPServiceDetailsSection from "./SPServiceDetailsSection";
import SPServicePricingSection from "./SPServicePricingSection";

export default class ServiceDetailsMain extends Component {
	render() {
		return (
			<main>
				{/* cta-start */}
				<SPServiceDetailsSection/>
				{/* cta-end */}

				{/* cta-start */}
				<SPServicePricingSection/>
				{/* cta-end */}

				{/* brand-start */}
				<Brand/>
				{/* brand-end */}
			</main>
		);
	}
}
