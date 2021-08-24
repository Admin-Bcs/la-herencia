import React, { Component } from 'react';
import SliderDefault from '../Elements/Slider/SliderDefault';
import H1AboutSection from './H1AboutSection';
import H1FeaturesSection from "./H1FeaturesSection";
import Product from "../Elements/Tab/ProductSection";
import H1CtaSection from './H1CtaSection';
import H1ChooseUsSection from "./H1ChooseUsSection";
import H1GallerySection from "./H1GallerySection";

import CounterDefault from '../Elements/Counter/CounterDefault';
import ClientSlider from "../Elements/Testimonials/ClientDefault";
import H1BlogSection from './H1BlogSection';
import Brand from '../Common/Brand'

class HomeMain extends Component {

	render() {

		return (
			<main>
				{/* slider-start */}
				<SliderDefault />
				{/* slider-end */}

				{/* about-area-start */}
				<H1AboutSection />
				{/* about-area-end */}

				{/* features-area-start */}
				<H1FeaturesSection />
				{/* features-area-end */}

				{/* product-area-start */}
				<Product />
				{/* product-area-end */}

				{/* cta-area-start */}
				{/* <H1CtaSection/> */}
				{/* cta-area-end */}

				{/* choose-us-area-start */}
				<H1ChooseUsSection />
				{/* choose-us-area-end */}

				{/* gallery-area-start */}
				<H1GallerySection />
				{/* gallery-area-end */}

				{/* counter-area-start */}
				{/* <CounterDefault/> */}
				{/* counter-area-end */}

				{/* client-area-start */}
				{/* <ClientSlider /> */}
				{/* client-area-end */}

				{/* blog-area-start */}
				{/* <H1BlogSection /> */}
				{/* blog-area-end */}

				{/* brand-area-start */}
				<Brand />
				{/* brand-area-end */}
			</main>
		);
	}
}

export default HomeMain;