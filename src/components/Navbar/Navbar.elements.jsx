import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
	color: black;
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
	@media screen and (max-width: 1000px) {
		background-color: ${({ click }) => (click ? "black" : "rgba(0, 0, 0, 0)")};
	}
`;
export const Logo = styled.img`
	padding-left: 1rem;
	padding-top: 1rem;

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
		height: 95vh;
		position: absolute;
		top: 60px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		flex-direction: column;
		transition: 0.2s all cubic-bezier(0.39, 0.575, 0.565, 1);
		background-color: #000000;
	}
`;

export const MenuItem = styled(Link)`
	text-decoration: none;
	height: 100%;
	padding: 0 1.5rem;
	display: flex;
	color: white;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 400;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		color: #555555;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
			3px 1px 5px rgba(63, 191, 191, 0.2);
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
		height: 70px;
		&:hover {
			background-color: black;
			color: #979797;
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
		color: white;
		font-size: 2rem;
		margin-right: 2rem;
	}
`;
