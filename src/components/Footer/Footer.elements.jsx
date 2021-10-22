import styled from "styled-components";
import { GrLinkedin, GrInstagram } from "react-icons/gr";

export const FooterContainer = styled.div`
	color: white;
	background-color: black;
	padding: 1.5rem 2rem 0rem 2rem;
	display: flex;
	justify-content: center;
`;
export const FooterWrapper = styled.div``;
export const SocialMediaWrapper = styled.div`
	width: 100%;
	box-sizing: content-box;
	display: flex;
	justify-content: space-around;
`;

export const SocialMediaElement = styled.a`
	color: inherit;
	text-decoration: none;
	font-size: 1.5rem;
	display: block;
	transition: 0.3s ease all;
	&:hover {
		color: inherit;
		text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
			0px 18px 23px rgba(0, 0, 0, 0.1);
	}
`;
export const FooterCredits = styled.p`
	font-size: 0.8rem;
	color: #222222;
	margin-top: 2rem;
`;
export const InstaIcon = styled(GrInstagram)``;
export const LinkedinIcon = styled(GrLinkedin)``;
