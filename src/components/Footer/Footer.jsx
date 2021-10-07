import React from "react";
import {
	FooterContainer,
	FooterCredits,
	FooterWrapper,
	SocialMediaElement,
	SocialMediaWrapper,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<p style={{ margin: "0", fontWeight: "200" }}>FOLLOW US ON</p>
				<SocialMediaWrapper>
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
				<FooterCredits>
					© 2021 OLA ESTUDIO | Website by Rodrigo Cabrera
				</FooterCredits>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
