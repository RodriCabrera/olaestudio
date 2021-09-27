import styled from "styled-components";

export const EstudioContainer = styled.div`
	width: 100%;
	background-color: whitesmoke;
`;
export const EstudioWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const EstudioHeader = styled.h1`
	text-align: center;
	padding: 1rem;
`;
export const ImagesContainer = styled.div`
	background-color: paleturquoise;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(200px, auto);
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
