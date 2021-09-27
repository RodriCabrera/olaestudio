import React from "react";
import { Image } from "./Portfolio.elements";

const PortfolioImage = ({ src }) => {
	return (
		<>
			<Image src={src} alt="PortfolioImage"></Image>
		</>
	);
};

export default PortfolioImage;
