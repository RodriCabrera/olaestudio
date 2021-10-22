import styled from "styled-components";

export const StudioContainer = styled.div`
	width: 100%;
	background-color: black;
`;
export const StudioHeader = styled.h1`
	text-align: center;
	padding: 1rem;
	color: white;
`;
export const Image = styled.div`
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	flex: 1;
	flex-wrap: wrap;
	height: 400px;
	transition: 300ms all ease-in-out;
	&:hover {
		filter: brightness(125%);
	}
`;
