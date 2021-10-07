import React from "react";
import Slider from "./Slider";
import { StudioContainer, StudioHeader } from "./Studio.elements";

const StudioCarousel = () => {
	return (
		<>
			<StudioContainer>
				<StudioHeader>THE STUDIO</StudioHeader>
				<Slider />
			</StudioContainer>
		</>
	);
};

export default StudioCarousel;
