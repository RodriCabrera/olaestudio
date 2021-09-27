import styled from "styled-components";

export const NavbarContainer = styled.div`
	width: 100%;
	height: 80px;
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 0;
	margin: 0;
	background-color: whitesmoke;
`;
export const NavbarWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
`;
export const IconLogo = styled.h1`
	/* height: 100%; */
	margin: 0 5px;
	padding: 0;
	position: relative;
	top: 0px;
	font-size: 2.5rem;
	letter-spacing: 2px;
	font-family: "Montserrat", sans-serif;
	font-weight: 800;
`;

export const Menu = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		/*click true: visible */
		left: ${({ click }) => (click ? 0 : "-100%")};
		flex-direction: column;
		transition: 0.5s all ease-in-out;
		background-color: whitesmoke;
	}
`;

export const MenuItem = styled.li`
	height: 100%;
	padding: 0 1.5rem;
	display: flex;
	color: black;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 400;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: #eeeded;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		height: 70px;
	}
`;
// Acá iría el Link de react-router:
export const MenuItemLink = styled.a`
	text-decoration: none;
	color: inherit;
	&:hover {
		color: black;
	}
`;

export const IconLogoMobile = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: flex;
		font-size: 2rem;
		margin-right: 2rem;
	}
`;