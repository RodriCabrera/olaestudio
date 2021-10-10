import styled from "styled-components";

export const BannerContainer = styled.div`
	top: 180px;
	height: calc(100vh - 80px);
	/* background-image: url("https://thumbs.gfycat.com/TintedFemaleFieldspaniel-size_restricted.gif"); */
	background-size: cover;
	background-position: center;
`;
export const BannerWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: end;
`;
export const BannerHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const BannerText = styled.h2`
	font-size: ${({ lg }) => (lg ? "4rem" : "2rem")};
`;
export const BannerTextContainer = styled.div`
	transition: 0.5s all ease-in-out;
	&:hover {
		color: #ce50f5;
	}
`;
