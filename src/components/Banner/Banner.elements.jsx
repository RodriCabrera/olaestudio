import styled from "styled-components";

export const BannerContainer = styled.div`
	/* position: relative; */
	/* top: 180px; */
	height: 70vh;
`;
export const VideoBg = styled.iframe``;
export const BannerWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
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
