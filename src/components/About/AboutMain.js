import React, { Component } from 'react';
import ClientSlider2 from '../Elements/Testimonials/ClientStyleTwo';
import Faq from '../Faq/Faq';
import APAbout4Section from './APAbout4Section';
import APTeam4Section from './APTeam4Section';
import APWhatWeDo2Section from './APWhatWeDo2Section';

class AboutMain extends Component {

	render() {
		return (
			<main>
				{/* About4-area-start */}
				<APAbout4Section />
				{/* About4-area-end */}

				{/* Faq-area-start */}
				{/* <Faq/> */}
				{/* Faq-area-end */}

				{/* WhatWeDo2-area-start */}
				<APWhatWeDo2Section />
				{/* WhatWeDo2-area-end */}

				{/* Team4-area-start */}
				{/* <APTeam4Section/> */}
				{/* Team4-area-end */}

				{/* brand-area-start */}
				{/* <ClientSlider2 /> */}
				{/* brand-area-end */}
			</main>
		);
	}
}

export default AboutMain;