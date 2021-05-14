import React, {Component} from 'react';
import Iframe from 'react-iframe'

class MapGoogle extends Component {
	render() {
		return (
			<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.136071515378!2d-74.04003244834423!3d40.75903184257111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257796c54417f%3A0xeef2e71240db36e!2s422%2011th%20St%2C%20Union%20City%2C%20NJ%2007087%2C%20USA!5e0!3m2!1sen!2sgt!4v1621007643732!5m2!1sen!2sgt"
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
		);
	}
}



export default MapGoogle;