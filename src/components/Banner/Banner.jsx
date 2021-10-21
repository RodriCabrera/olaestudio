import React from "react";
import {
	BannerContainer,
	BannerWrapper,
	// BannerHeader,
	// BannerTextContainer,
	// BannerWrapper,
	// BannerText,
	// VideoBg,
	ReelGif,
	ReelContainer,
} from "./Banner.elements";
import reel from "../../assets/ola-reel.gif";

const Banner = () => {
	return (
		<BannerContainer>
			<BannerWrapper>
				<ReelContainer>
					<ReelGif src={reel} />
				</ReelContainer>
				{/* <VideoBg
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/ig54Pd5u5Zc?rel=0&showinfo=0&modestbranding=0&autoplay=1&controls=0&mute=1&loop=1&playlist=ig54Pd5u5Zc`}
					title="YouTube video player"
					allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				></VideoBg> */}
			</BannerWrapper>
			{/* <BannerHeader>
					<BannerTextContainer>
						<BannerText lg>INSERT</BannerText>
						<BannerText>REEL</BannerText>
					</BannerTextContainer>
				</BannerHeader>
			</BannerWrapper> */}
		</BannerContainer>
	);
};

export default Banner;
