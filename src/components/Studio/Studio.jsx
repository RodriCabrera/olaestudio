import React from "react";
import Slider from "./Slider";
import { StudioContainer, StudioHeader } from "./Studio.elements";

const Studio = () => {
	return (
		<>
			<StudioContainer>
				<StudioHeader>THE STUDIO</StudioHeader>
				<Slider />
			</StudioContainer>
		</>
	);
};

export default Studio;
