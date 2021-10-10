import React, { useRef } from "react";
import {
	ContactContainer,
	ContactForm,
	ContactInput,
	ContactSendBtn,
	ContactTextArea,
	ContactWrapper,
} from "./Contact.elements";

const Contact = () => {
	const formRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<ContactContainer>
				<ContactWrapper>
					<ContactForm ref={formRef} onSubmit={handleSubmit}>
						<ContactInput
							type="text"
							placeholder="Name"
							name="user_name"
							required
						></ContactInput>
						<ContactInput
							type="text"
							placeholder="Subject"
							name="user_subject"
							required
						></ContactInput>
						<ContactInput
							type="text"
							placeholder="Email"
							name="user_email"
							required
						></ContactInput>
						<ContactTextArea
							rows="5"
							placeholder="Message"
							name="message"
						></ContactTextArea>
						<ContactSendBtn>Send</ContactSendBtn>
					</ContactForm>
				</ContactWrapper>
			</ContactContainer>
		</div>
	);
};

export default Contact;
