import React, {Component} from 'react';
import CounterStyleThree from '../Elements/Counter/CounterStyleThree';
import Slider3 from '../Elements/Slider/SliderStyleThree';
import ProductTab from '../Elements/Tab/ProductSection';
import Faq from '../Faq/Faq';
import H3About3Section from './H3About3Section';
import H3BestDealsSection from './H3BestDealsSection';
import H3Blog3Section from './H3Blog3Section';
import H3OrganicSection from './H3OrganicSection';
import H3Service3Section from './H3Service3Section';
import H3Team3Section from './H3Team3Section';

class HomeThreeMain extends Component {

	render() {
		return (
			<main>
				{/* slider-start */}
				<Slider3/>
				{/* slider-end */}

				{/* about-start */}
				<H3About3Section/>
				{/* about-end */}

				{/* organic-start */}
				<H3OrganicSection/>
				{/* organic-end */}

				{/* product-start */}
				<ProductTab/>
				{/* product-end */}

				{/* counter3-start */}
				<CounterStyleThree/>
				{/* counter3-end */}

				{/* deals-start */}
				<H3BestDealsSection/>
				{/* deals-end */}

				{/* service3-start */}
				<H3Service3Section/>
				{/* service3-end */}

				{/* team3-start */}
				<H3Team3Section/>
				{/* team3-end */}

				{/* faq-start */}
				<Faq/>
				{/* faq-end */}

				{/* blog-start */}
				<H3Blog3Section/>
				{/* blog-end */}
			</main>
		);
	}
}

export default HomeThreeMain;