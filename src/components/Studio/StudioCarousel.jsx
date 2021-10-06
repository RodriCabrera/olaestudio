import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { StudioContainer, StudioHeader } from "./Studio.elements";

const StudioCarousel = () => {
	return (
		<>
			<StudioContainer>
				<StudioHeader>THE STUDIO</StudioHeader>
				<Link to="/studio">
					<Slider />
				</Link>
			</StudioContainer>
		</>
	);
};

export default StudioCarousel;
