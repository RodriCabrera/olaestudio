import React from "react";
import {
	FooterContainer,
	SocialMediaElement,
	SocialMediaWrapper,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMediaWrapper>
				<p style={{ margin: "0", fontWeight: "200" }}>FOLLOW US ON</p>
				<SocialMediaElement
					href="https://www.instagram.com/olaestudio.wav/"
					target="_blank"
					rel="noreferrer"
				>
					INSTAGRAM
				</SocialMediaElement>
				<SocialMediaElement
					href="https://www.linkedin.com/company/ola-estudio/"
					target="_blank"
					rel="noreferrer"
				>
					LINKEDIN
				</SocialMediaElement>
			</SocialMediaWrapper>
		</FooterContainer>
	);
};

export default Footer;
