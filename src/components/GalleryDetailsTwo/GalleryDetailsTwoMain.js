import React, {Component} from "react";
import Brand from "../Common/Brand";
import GPGalleryDetailsTwoSection from "./GPGalleryDetailsTwoSection";
import GPGalleryReletedSection from "./GPGalleryReletedSection";

export default class GalleryDetailsTwoMain extends Component {
	render() {
		return (
			<main>
				{/* Gallery-start */}
				<GPGalleryDetailsTwoSection/>
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
