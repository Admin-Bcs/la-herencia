import MailchimpSubscribe from "react-mailchimp-subscribe"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const url = "https://bangladevs.us16.list-manage.com/subscribe/post?u=a31c01f1ea7e047420474b3c5&amp;id=2729646c8f";

//custom form
const CustomForm = ({status, message, onValidated}) => {
	let email;
	const submit = () =>
		email &&
		email.value.indexOf("@") > -1 &&
		onValidated({
			EMAIL: email.value,
		});

	return (
		<div className="form-wrap">
			{status === "sending" && <div style={{color: "blue"}}>sending...</div>}
			{status === "error" && (<div style={{color: "red"}} dangerouslySetInnerHTML={{__html: message}}/>)}
			{status === "success" && (<div style={{color: "green"}} dangerouslySetInnerHTML={{__html: message}}/>)}
			<input ref={node => (email = node)} type="email" placeholder="Enter your emaill"/>
			<button className="btn" onClick={submit}>SUBMIT</button>
		</div>
	);
};

// use the render prop and your custom form
const CustomSubscribeForm = () => (
	<MailchimpSubscribe
		url={url}
		render={({subscribe, status, message}) => (
			<div className="subscribes-form">
				<CustomForm onSubmitted={formData => subscribe(formData)}/>
				{status === "sending" && <div style={{color: "blue"}}>sending...</div>}
				{status === "error" && <div style={{color: "red"}} dangerouslySetInnerHTML={{__html: message}}/>}
				{status === "success" && <div style={{color: "green"}}>Subscribed !</div>}
			</div>
		)}
	/>
)

export default CustomSubscribeForm;