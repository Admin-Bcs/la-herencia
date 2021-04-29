import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ApTeam4Section extends Component {
	render() {
		return (
			<div className="team-area gray2-bg pt-110 pb-90">
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
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require('../../../public/assets/img/team/1.jpg')} alt='image'/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Pablo J. Bleich</h4>
									<span>Organic Farmer</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require('../../../public/assets/img/team/2.jpg')} alt='image'/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Louise F. Shows</h4>
									<span>Organic Farmer</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require('../../../public/assets/img/team/3.jpg')} alt='image'/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Normand Shannon</h4>
									<span>Organic Farmer</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="team-wrapper text-center mb-30">
								<div className="team-img">
									<img src={require('../../../public/assets/img/team/4.jpg')} alt='image'/>
									<div className="team-icon">
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'linkedin']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']}/></i></a>
										<a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']}/></i></a>
									</div>
								</div>
								<div className="team-text">
									<h4>Renita Gillenwater</h4>
									<span>Organic Farmer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApTeam4Section;