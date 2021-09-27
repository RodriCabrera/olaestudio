import React from "react";
import {
	BannerContainer,
	BannerHeader,
	BannerText,
	BannerTextContainer,
	BannerWrapper,
} from "./Banner.elements";

const Banner = () => {
	return (
		<BannerContainer>
			<BannerWrapper>
				<BannerHeader>
					<BannerTextContainer>
						<BannerText lg>INSERT</BannerText>
						<BannerText>REEL</BannerText>
					</BannerTextContainer>
				</BannerHeader>
			</BannerWrapper>
		</BannerContainer>
	);
};

export default Banner;
