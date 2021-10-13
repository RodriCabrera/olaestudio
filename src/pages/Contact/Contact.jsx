import React, { useRef } from "react";
import {
	ContactContainer,
	ContactForm,
	ContactInput,
	ContactSendBtn,
	ContactTextArea,
	ContactWrapper,
} from "./Contact.elements";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_YOUR_SERVICE_ID,
				process.env.REACT_APP_YOUR_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_YOUR_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<ContactContainer>
				<ContactWrapper>
					<ContactForm ref={form} onSubmit={sendEmail}>
						<ContactInput
							type="text"
							placeholder="Name"
							name="user_name"
						></ContactInput>
						<ContactInput
							type="email"
							placeholder="Email"
							name="user_email"
							required
						></ContactInput>
						<ContactInput
							type="tel"
							placeholder="Telephone"
							name="user_phone"
							required
						></ContactInput>
						<ContactTextArea
							rows="4"
							placeholder="Send us your message, or enter your contact info and we'll reach out to you."
							name="user_message"
						></ContactTextArea>
						<ContactSendBtn>Send</ContactSendBtn>
					</ContactForm>
				</ContactWrapper>
			</ContactContainer>
		</div>
	);
};

export default Contact;
