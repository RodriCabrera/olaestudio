import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
	min-height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	background-color: black;
`;
export const ProjectVideo = styled.div`
	width: 100%;
`;
export const ProjectInfo = styled.div`
	padding: 1rem;
	color: white;
`;

export const StyledBackLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 1.5rem;
	margin-top: 4rem;
	padding: 1rem;
	transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.2s;
	&:hover {
		color: grey;
	}
`;
