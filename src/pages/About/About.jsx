import React from "react";
import {
	AboutContainer,
	AboutWrapper,
	BodyText,
	MainText,
	SubMainText,
} from "./About.elements";

const About = () => {
	return (
		<AboutContainer>
			<AboutWrapper>
				<MainText>
					OLA es un estudio de creatividad sonora en Colegiales, Buenos Aires.
				</MainText>
				<SubMainText>
					Nuestra pasión radica en la creación de una huella sonora.
				</SubMainText>
				<BodyText>
					Mediante diseño sonoro, composición musical, audio inmersivo para
					medios lineales y no lineales. Utilizando técnicas de grabación de
					campo, foley, síntesis y sampling.
				</BodyText>

				<h6 style={{ textAlign: "center" }}>
					OLA somos Matias Luzi, Luciano Cabrera y Federico Chillo.
				</h6>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default About;
