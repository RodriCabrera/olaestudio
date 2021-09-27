import React from "react";
import {
	FooterContainer,
	FooterWrapper,
	SocialMediaElement,
	SocialMediaWrapper,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<SocialMediaWrapper>
					<p style={{ margin: "0", fontWeight: "200" }}>FOLLOW US ON</p>
					<SocialMediaElement>INSTAGRAM</SocialMediaElement>
					<SocialMediaElement>LINKEDIN</SocialMediaElement>
					<SocialMediaElement>YOUTUBE</SocialMediaElement>
					<SocialMediaElement>VIMEO</SocialMediaElement>
				</SocialMediaWrapper>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
