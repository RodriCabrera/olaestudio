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
				{/* <SocialMediaElement
					href="https://www.youtube.com/channel/UCJfNS1PKdkdNouRqL5_yXmA/featured"
					target="_blank"
					rel="noreferrer"
				>
					YOUTUBE
				</SocialMediaElement> */}
				{/* <SocialMediaElement>VIMEO</SocialMediaElement> */}
			</SocialMediaWrapper>
		</FooterContainer>
	);
};

export default Footer;
