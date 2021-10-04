import React from "react";
import {
	BannerContainer,
	BannerHeader,
	BannerTextContainer,
	BannerWrapper,
	// BannerText,
} from "./Banner.elements";

const Banner = () => {
	return (
		<BannerContainer>
			<BannerWrapper>
				<BannerHeader>
					<BannerTextContainer>
						{/* <BannerText lg>INSERT</BannerText>
						<BannerText>REEL</BannerText> */}
					</BannerTextContainer>
				</BannerHeader>
			</BannerWrapper>
		</BannerContainer>
	);
};

export default Banner;
