import React, {Component} from 'react';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import TeamMain from '../components/Team/TeamMain';
import HeaderStyleTwo from "../components/Layout/Header/HeaderStyleTwo";


class Team extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderStyleTwo/>
				<SiteBreadcrumb pageTitle="Team Member"/>
				<TeamMain/>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Team;