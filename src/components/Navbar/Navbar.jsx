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
				<IconLogo>OLA</IconLogo>

				<IconLogoMobile onClick={() => changeClick()}>
					{click ? <FaTimes /> : <FaBars />}
				</IconLogoMobile>

				<Menu click={click}>
					<MenuItem onClick={() => changeClick()}>
						<MenuItemLink>ABOUT</MenuItemLink>
					</MenuItem>
					<MenuItem onClick={() => changeClick()}>
						<MenuItemLink>PORTFOLIO</MenuItemLink>
					</MenuItem>
					<MenuItem onClick={() => changeClick()}>
						<MenuItemLink>STUDIO</MenuItemLink>
					</MenuItem>
					<MenuItem onClick={() => changeClick()}>
						<MenuItemLink>LAB</MenuItemLink>
					</MenuItem>
					<MenuItem onClick={() => changeClick()}>
						<MenuItemLink>CONTACT</MenuItemLink>
					</MenuItem>
				</Menu>
			</NavbarWrapper>
		</NavbarContainer>
	);
};

export default Navbar;
