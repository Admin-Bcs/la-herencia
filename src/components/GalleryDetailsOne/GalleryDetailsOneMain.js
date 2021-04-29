import React, {Component} from "react";
import Brand from "../Common/Brand";
import GPCtaSection from "../GalleryOne/GPCtaSection";
import GPGalleryDetailsOneSection from "./GPGalleryDetailsOneSection";

export default class GalleryDetailsOneMain extends Component {
	render() {
		return (
			<main>
				{/* Gallery-start */}
				<GPGalleryDetailsOneSection/>
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
