import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class H3Team3Section extends Component {
	render() {
		return (
			<div className="team-area pt-110 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require('../../../public/assets/img/shape/1.png')} alt='image'/>
								</div>
								<h1>Zomata Farmer</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor
									incididunt ut labore et dolore magna aliqua enim minim veniam</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="single-team text-center mb-30">
								<div className="team2-img">
									<img src={require('../../../public/assets/img/team/team1.jpg')} alt='image'/>
									<div className="team-content">
										<h4>Pablo J. Bleich</h4>
										<span>Organic Farmer</span>
										<div className="team2-icon">
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="single-team text-center mb-30">
								<div className="team2-img">
									<img src={require('../../../public/assets/img/team/team2.jpg')} alt='image'/>
									<div className="team-content">
										<h4>Pablo J. Bleich</h4>
										<span>Organic Farmer</span>
										<div className="team2-icon">
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="single-team text-center mb-30">
								<div className="team2-img">
									<img src={require('../../../public/assets/img/team/team3.jpg')} alt='image'/>
									<div className="team-content">
										<h4>Pablo J. Bleich</h4>
										<span>Organic Farmer</span>
										<div className="team2-icon">
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
											<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H3Team3Section;