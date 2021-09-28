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
export const ProjectTitleWrapper = styled.div`
	position: absolute;
	height: 100%;
	width: 70%;
`;

export const ProjectTitle = styled.p`
	text-align: center;
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	margin: 0;
	transform: translate(-50%, -50%);
	opacity: 0;
	font-size: 1.5rem;
	color: lightblue;
	transition: 500ms all ease;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	transition: 200ms all ease-out;
`;
export const ImageWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover ${Image} {
		filter: brightness(60%);
		transform: scale(1.1);
	}
	&:hover ${ProjectTitle} {
		opacity: 1;
		font-size: 1.5rem;
	}
`;
