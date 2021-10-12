import styled from "styled-components";

export const ContactContainer = styled.div`
	height: 100%;
	padding: 2rem;
`;
export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ContactForm = styled.form`
	max-width: 700px;
	margin-top: 20px;
`;
export const ContactInput = styled.input`
	width: 100%;
	height: 50px;
	border: none;
	border-bottom: 1px black solid;
	margin: 10px 0px;
`;
export const ContactTextArea = styled.textarea`
	width: 100%;
	margin: 1rem 0;
`;
export const ContactSendBtn = styled.button`
	border: none;
	padding: 15px;
	background-color: black;
	color: white;
`;
