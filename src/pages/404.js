import React, {Component} from 'react';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import Error404Main from '../components/Errror404/Error404Main';
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";


class Error404 extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderStyleTwo/>
				<SiteBreadcrumb pageTitle="404 Page"/>
				<Error404Main/>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Error404;