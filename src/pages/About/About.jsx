import React from "react";
import {
	AboutContainer,
	// AboutLogoHeader,
	AboutWrapper,
	BodyText,
	MainText,
	SubMainText,
} from "./About.elements";
// import logo from "../../assets/logos/LOGOmin.png";
const About = () => {
	return (
		<AboutContainer>
			<AboutWrapper>
				{/* <AboutLogoHeader src={logo} alt="ola logo"></AboutLogoHeader> */}
				<MainText>
					Somos un estudio de creatividad sonora en Colegiales, Buenos Aires.
				</MainText>
				<SubMainText>
					Nuestra pasión radica en la creación de una huella sonora.
				</SubMainText>
				<BodyText>
					Mediante diseño sonoro, composición musical, audio inmersivo para
					medios lineales y no lineales. Utilizamos técnicas de grabación de
					campo, foley, síntesis y sampling.
				</BodyText>

				<h5 style={{ textAlign: "center", margin: "2rem" }}>
					OLA somos Matias Luzi, Luciano Cabrera y Federico Chillo.
				</h5>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default About;
