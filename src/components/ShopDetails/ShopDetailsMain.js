import React, {Component} from "react";
import Brand from "../Common/Brand";
import SPShopDetailsSection from "./SPShopDetailsSection";

export default class ShopDetailsMain extends Component {
	render() {
		return (
			<main>
				{/* cta-start */}
				<SPShopDetailsSection/>
				{/* cta-end */}

				{/* brand-start */}
				<Brand/>
				{/* brand-end */}
			</main>
		);
	}
}
