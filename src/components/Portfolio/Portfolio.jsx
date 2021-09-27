import React from "react";
import {
	ImagesGrid,
	PortfolioContainer,
	PortfolioWrapper,
	ImageWrapper,
} from "./Portfolio.elements";
import PortfolioImage from "./PortfolioImage";
import PortfolioImageHeader from "./PortfolioImageHeader";

const Portfolio = () => {
	const url =
		"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

	const generateImages = (n) => {
		const keys = [];
		for (let i = 1; i <= n; i++) {
			keys.push(i);
		}
		const images = keys.map((x) => (
			<ImageWrapper key={x.toString()}>
				<PortfolioImage src={url} />
				<PortfolioImageHeader />
			</ImageWrapper>
		));
		return images;
	};

	return (
		<PortfolioContainer>
			<PortfolioWrapper>
				<ImagesGrid>{generateImages(16)}</ImagesGrid>
			</PortfolioWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
