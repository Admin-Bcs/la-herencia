import React, {Component} from "react";
import GPCtaSection from "./GPCtaSection";
import Brand from "../Common/Brand";
import GalleryTabOne from "../Elements/Tab/GalleryTabOne";

export default class GalleryOneMain extends Component {
	render() {
		return (
			<main>
				{/* Gallery-start */}
				<GalleryTabOne/>
				{/* Gallery-end */}

				{/* cta-start */}
				<GPCtaSection/>
				{/* cta-end */}

				{/* brand-start */}
				<Brand/>
				{/* brand-end */}
			</main>
		);
	}
}
