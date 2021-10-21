import styled from "styled-components";

export const BannerContainer = styled.div`
	/* position: relative;
	top: 180px; */
	/* min-height: 60vh; */
`;
export const VideoBg = styled.iframe``;

export const ReelContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 700px;
`;
export const ReelGif = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
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
