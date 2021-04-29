import React, {Component} from "react";
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceDetailsMain from "../components/ServiceDetails/ServiceDetailsMain";

class ServicesDetails extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderStyleTwo/>
				<SiteBreadcrumb pageTitle="Service Details"/>
				<ServiceDetailsMain/>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default ServicesDetails;
