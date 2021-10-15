import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
	width: 100%;
	height: 80px;
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
`;
export const NavbarWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Logo = styled.img`
	padding-left: 1rem;
	height: 70px;
	cursor: pointer;
	@media screen and (max-width: 480px) {
		height: 60px;
	}
`;

export const Menu = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	cursor: pointer;
	@media screen and (max-width: 1000px) {
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		/*click true: visible */
		left: ${({ click }) => (click ? 0 : "-100%")};
		flex-direction: column;
		transition: 0.5s all ease-in-out;
		background-color: #000000;
	}
`;

export const MenuItem = styled(Link)`
	text-decoration: none;
	height: 100%;
	padding: 0 1.5rem;
	display: flex;
	color: black;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 400;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #f0eeee;
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
		height: 70px;
		&:hover {
			background-color: black;
		}
	}
`;
// Acá iría el Link de react-router:
export const MenuItemLink = styled.p`
	margin: 0;
	text-decoration: none;
	color: inherit;
	cursor: pointer;

	&:hover {
		color: black;
	}
	@media screen and (max-width: 1000px) {
		font-size: 1.5rem;
		color: white;
	}
	&:hover {
		color: inherit;
	}
`;

export const IconLogoMobile = styled.div`
	display: none;

	@media screen and (max-width: 1000px) {
		display: flex;
		font-size: 2rem;
		margin-right: 2rem;
	}
`;
