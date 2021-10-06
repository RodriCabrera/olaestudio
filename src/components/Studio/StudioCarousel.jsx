import React from "react";
import Slider from "./Slider";
import {
	StudioContainer,
	StudioHeader,
	StyledLinkToPage,
} from "./Studio.elements";

const StudioCarousel = () => {
	return (
		<>
			<StudioContainer>
				<StudioHeader>THE STUDIO</StudioHeader>
				<StyledLinkToPage to="/studio">Go to studio equipment</StyledLinkToPage>
				<Slider />
			</StudioContainer>
		</>
	);
};

export default StudioCarousel;
