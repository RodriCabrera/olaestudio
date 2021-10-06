import React, { useState } from "react";
import {
	IconLogo,
	IconLogoMobile,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarContainer,
	NavbarWrapper,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const changeClick = () => {
		setClick(!click);
	};

	return (
		<NavbarContainer>
			<NavbarWrapper>
				<IconLogo to="/">OLA</IconLogo>

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
					<MenuItem to="/lab" onClick={() => changeClick()}>
						<MenuItemLink>LAB</MenuItemLink>
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
