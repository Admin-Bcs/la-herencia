import React, {Component} from "react";
import Brand from "../Common/Brand";
import GPGalleryDetailsThreeSection from "./GPGalleryDetailsThreeSection";
import GPGalleryReletedSection from "../GalleryDetailsTwo/GPGalleryReletedSection";

export default class GalleryDetailsThreeMain extends Component {
	render() {
		return (
			<main>
				{/* Gallery-start */}
				<GPGalleryDetailsThreeSection/>
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
