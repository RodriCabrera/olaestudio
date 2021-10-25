import React, { useState } from "react";
import {
	IconLogoMobile,
	Logo,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarContainer,
	NavbarWrapper,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/ola-esfumado.png";
const Navbar = () => {
	const [click, setClick] = useState(false);

	const changeClick = () => {
		setClick(!click);
	};

	return (
		<NavbarContainer>
			<NavbarWrapper click={click}>
				<Link to="/">
					<Logo src={logo} />
				</Link>
				<IconLogoMobile onClick={() => changeClick()}>
					{click ? <FaTimes /> : <FaBars />}
				</IconLogoMobile>

				<Menu click={click}>
					<MenuItem to="/" onClick={() => changeClick()}>
						<MenuItemLink>HOME</MenuItemLink>
					</MenuItem>
					<MenuItem to="/about" onClick={() => changeClick()}>
						<MenuItemLink>ABOUT</MenuItemLink>
					</MenuItem>
					<MenuItem to="/studio" onClick={() => changeClick()}>
						<MenuItemLink to="/studio">STUDIO</MenuItemLink>
					</MenuItem>
					<MenuItem to="/contact" onClick={() => changeClick()}>
						<MenuItemLink>CONTACT</MenuItemLink>
					</MenuItem>
				</Menu>
			</NavbarWrapper>
		</NavbarContainer>
	);
};

export default Navbar;
