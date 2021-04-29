import React, {Component} from 'react';
import SliderStyleTwo from '../Elements/Slider/SliderStyleTwo';
import H2WhatWeDoSection from './H2WhatWeDoSection';
import Product from "../Elements/Tab/ProductSection";
import H2Cta2Section from './H2Cta2Section';
import H2ChooseUs2Section from './H2ChooseUs2Section';
import H2Service2Section from './H2Service2Section';
import CounterStyleTwo from '../Elements/Counter/CounterStyleTwo';
import TestimonialsStyleTwo from '../Elements/Testimonials/TestimonialsStyleTwo';
import H2Blog2Section from './H2Blog2Section';


class HomeTwoMain extends Component {

	render() {
		return (
			<main>
				{/* slider-start */}
				<SliderStyleTwo/>
				{/* slider-end */}

				{/* what-we-start */}
				<H2WhatWeDoSection/>
				{/* what-we-End */}

				{/* cta2-start */}
				<H2Cta2Section/>
				{/* cta2-End */}

				{/* product-start */}
				<Product/>
				{/* product-we-End */}

				{/* choose-us2-start */}
				<H2ChooseUs2Section/>
				{/* choose-us2-End */}

				{/* service2-start */}
				<H2Service2Section/>
				{/* service2-End */}

				{/* counter-start */}
				<CounterStyleTwo/>
				{/* counter-End */}

				{/* testimonials-start */}
				<TestimonialsStyleTwo/>
				{/* testimonials-End */}

				{/* blog2-start */}
				<H2Blog2Section/>
				{/* blog2-End */}
			</main>
		);
	}
}

export default HomeTwoMain;