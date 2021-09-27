import styled from "styled-components";

export const PortfolioContainer = styled.div`
	height: auto;
	width: 100%;
`;

export const PortfolioWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: pink;
`;

export const ImagesGrid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(200px, auto);
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const ImageCaption = styled.p`
	position: absolute;
	opacity: 0;
	color: lightblue;
	transition: 700ms all cubic-bezier(0.35, 0.66, 0.21, 1.07);
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	transition: 700ms all cubic-bezier(0.35, 0.66, 0.21, 1.07);
`;
export const ImageWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover ${Image} {
		filter: brightness(60%);
		transform: scale(1.2);
	}
	&:hover ${ImageCaption} {
		opacity: 1;
		font-size: 1.5rem;
	}
`;
