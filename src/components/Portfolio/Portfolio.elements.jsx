import { Link } from "react-router-dom";
import styled from "styled-components";

export const PortfolioContainer = styled.div`
	height: auto;
	width: 100%;
	@media screen and (max-width: 470px) {
		padding: 5px;
	}
`;

export const PortfolioWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImagesGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: minmax(auto, auto);
	@media screen and (max-width: 1600px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 470px) {
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
	color: #ffffff;
	transition: 500ms all ease;
	/* @media screen and (max-width: 500px) {
		opacity: 1;
	} */
`;
export const Thumbnail = styled.img`
	width: 100%;
	height: auto;
	transition: 200ms all ease-out;
`;
export const ImageWrapperLink = styled(Link)`
	position: relative;
	height: auto;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover ${Thumbnail} {
		filter: brightness(60%);
		transform: scale(1.1);
	}
	&:hover ${ProjectTitle} {
		opacity: 1;
		font-size: 1.5rem;
	}
`;

export const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem;
	width: 100%;
`;
