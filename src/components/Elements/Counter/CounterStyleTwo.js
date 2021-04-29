import React, {useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CounterStyleTwo = () => {

	const [isViewCount, setIsViewCount] = useState(false);

	const onVisibilityChange = isVisible => {
		if (isVisible) {
			setIsViewCount(!isViewCount);
		}
	}

	const counters = [
		{
			countNum: 25,
			countTitle: 'Years Experience'
		},
		{
			countNum: 98,
			countTitle: 'Expert Member'
		},
		{
			countNum: 49,
			countTitle: 'Win Awards'
		},
		{
			countNum: 85,
			countTitle: 'World Wide Branch'
		}
	];

	return (
		<div className="counter-area pt-110 pb-85" style={{backgroundImage: `url(${'assets/img/bg/bg9.jpg'})`}}>
			<div className="container">
				{counters &&
				<div className="row">
					<div className="col-xl-12">
						<div className="counter-title text-center mb-60">
							<h1>We Are Startup Company.Experts In Field <br/> Organic Startup Movement.</h1>
						</div>
					</div>
					{counters.map((counter, num) => (
						<div key={num} className="col-xl-3 col-lg-3 col-md-6">
							<div className="counter-wrapper mb-30">
								<div className="counter-text">
									<h1>
										<VisibilitySensor onChange={onVisibilityChange} offset={{top: 10}}
										                  delayedCall>
											<CountUp end={!isViewCount ? counter.countNum : 0}/>
										</VisibilitySensor>
										+
									</h1>
									<span>{counter.countTitle}</span>
								</div>
							</div>
						</div>
					))}
				</div>
				}
			</div>
		</div>
	)
}
export default CounterStyleTwo;