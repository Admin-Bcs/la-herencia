import React, {Component} from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ShopDetailsMain from "../components/ShopDetails/ShopDetailsMain";

class ServicesDetails extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderStyleTwo/>
				<SiteBreadcrumb pageTitle="Product Details"/>
				<ShopDetailsMain />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default ServicesDetails;
