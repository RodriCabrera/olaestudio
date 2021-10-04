import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 300px;
	padding: 1rem;
`;
export const ProjectVideo = styled.div`
	/* width: 300px; */
	height: 100%;
`;

export const ProjectInfo = styled.div``;

export const StyledBackLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	font-size: 1.2rem;
	padding: 1rem;
`;
