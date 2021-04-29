import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

function CPMapSection() {
	const defaultMap = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	return (
		<section className="map-area">
			<div className="map2-wrapper">
				<div id="contact-map" className="map">
					<GoogleMapReact defaultCenter={defaultMap.center} defaultZoom={defaultMap.zoom}>
						<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker"/>
					</GoogleMapReact>
				</div>
			</div>
		</section>
	);
}

export default CPMapSection;