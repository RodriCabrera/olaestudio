import React from "react";
import {
	BannerContainer,
	// BannerHeader,
	// BannerTextContainer,
	// BannerWrapper,
	// BannerText,
	VideoBg,
} from "./Banner.elements";

const Banner = () => {
	return (
		<BannerContainer>
			<VideoBg
				width="100%"
				height="100%"
				src={`https://www.youtube.com/embed/Qqf9xf77rnc?rel=0&showinfo=0&modestbranding=0&autoplay=1&controls=0&mute=1&loop=1`}
				title="YouTube video player"
				modestbranding="0"
				showinfo="0"
				allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				autoPlay="1"
			></VideoBg>
			{/* <BannerWrapper>
				<BannerHeader>
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
