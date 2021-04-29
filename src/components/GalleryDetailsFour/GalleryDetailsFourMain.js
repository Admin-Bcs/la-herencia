import React, {Component} from "react";
import Brand from "../Common/Brand";
import GPGalleryDetailsFourSection from "./GPGalleryDetailsFourSection";
import GPGalleryReletedSection from "../GalleryDetailsTwo/GPGalleryReletedSection";

export default class GalleryDetailsFourMain extends Component {
	render() {
		return (
			<main>
				{/* Gallery-start */}
				<GPGalleryDetailsFourSection/>
				{/* Gallery-end */}

				{/* Gallery-releted-start */}
				<GPGalleryReletedSection/>
				{/* Gallery-releted-end */}

				{/* brand-start */}
				<Brand/>
				{/* brand-end */}
			</main>
		);
	}
}
