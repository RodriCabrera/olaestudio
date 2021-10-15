import React, { useRef, useState } from "react";
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
	const [loading, setLoading] = useState(false);

	const [formState, setFormState] = useState({
		userName: "",
		userEmail: "",
		userPhone: "",
		userMessage: "",
	});

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
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
			)
			.finally(() => {
				setLoading(false);
				clearForm();
			});
	};

	const onInputChange = (e) => {
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	console.log(formState);
	function clearForm() {
		setFormState({
			userName: "",
			userEmail: "",
			userPhone: "",
			userMessage: "",
		});
	}
	return (
		<ContactContainer>
			<ContactWrapper>
				<ContactForm ref={form} onSubmit={sendEmail}>
					<ContactInput
						type="text"
						placeholder="Name"
						name="userName"
						value={formState.userName}
						onChange={onInputChange}
						required
					></ContactInput>
					<ContactInput
						type="text"
						placeholder="Email"
						name="userEmail"
						value={formState.userEmail}
						onChange={onInputChange}
					></ContactInput>
					<ContactInput
						type="tel"
						placeholder="Phone number"
						name="userPhone"
						value={formState.userPhone}
						onChange={onInputChange}
					></ContactInput>

					<ContactTextArea
						rows="4"
						placeholder="Send us your message, or enter your contact info and we'll reach out to you."
						name="userMessage"
						onChange={onInputChange}
						value={formState.userMessage}
					></ContactTextArea>

					{loading ? (
						<ContactSendBtn disabled>Sending Message...</ContactSendBtn>
					) : (
						<ContactSendBtn>Send</ContactSendBtn>
					)}
				</ContactForm>
			</ContactWrapper>
		</ContactContainer>
	);
};

export default Contact;
