import React, {useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CounterStyleThree = () => {

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
		<div className="counter-area pt-120 pb-85" style={{backgroundImage: `url(${'assets/img/bg/bg12.jpg'})`}}>
			<div className="container">
				<div className="counter-bg mb-60">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4">
							<div className="counter-section mb-30">
								<h1>30</h1>
							</div>
						</div>
						<div className="col-xl-8 col-lg-8 col-md-8">
							<div className="counter-info mb-30">
								<h1>Years of Industry <br/> Experience</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
							</div>
						</div>
					</div>
				</div>
				{counters &&
				<div className="row">
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
export default CounterStyleThree;