import React from "react";
import {
	FooterContainer,
	FooterCredits,
	FooterWrapper,
	InstaIcon,
	LinkedinIcon,
	SocialMediaElement,
	SocialMediaWrapper,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<SocialMediaWrapper>
					<SocialMediaElement
						href="https://www.linkedin.com/company/ola-estudio/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedinIcon />
					</SocialMediaElement>
					<SocialMediaElement
						href="https://www.instagram.com/olaestudio.wav/"
						target="_blank"
						rel="noreferrer"
					>
						<InstaIcon />
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
