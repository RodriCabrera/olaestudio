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
			[e.target.id]: e.target.value,
		}));
	};

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
				<ContactForm ref={form} onSubmit={sendEmail} autoComplete="off">
					<ContactInput
						id="userName"
						type="text"
						placeholder="Name"
						name="user_name"
						value={formState.userName}
						onChange={onInputChange}
						required
						autoComplete="off"
					></ContactInput>
					<ContactInput
						type="text"
						placeholder="Email"
						id="userEmail"
						name="user_email"
						value={formState.userEmail}
						onChange={onInputChange}
						autoComplete="off"
					></ContactInput>
					<ContactInput
						id="userPhone"
						onChange={onInputChange}
						type="text"
						placeholder="Phone number"
						value={formState.userPhone}
						name="user_phone"
						autoComplete="off"
					></ContactInput>
					<ContactTextArea
						rows="4"
						placeholder="Send us your message, or enter your contact info and we'll reach out to you."
						name="user_message"
						id="userMessage"
						onChange={onInputChange}
						value={formState.userMessage}
						autoComplete="off"
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
