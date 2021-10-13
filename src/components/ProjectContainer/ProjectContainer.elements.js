import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
	min-height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
export const ProjectVideo = styled.div`
	width: 100%;
`;
export const ProjectInfo = styled.div`
	padding: 1rem;
`;

export const StyledBackLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	font-size: 1.5rem;
	padding: 1rem;
`;
