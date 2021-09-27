import React from "react";
import Slider from "./Slider";
import {
	EstudioContainer,
	EstudioHeader,
	// BORRAR DE LOS ELEMENTS:
	// EstudioWrapper,
	// Image,
	// ImagesContainer,
} from "./Estudio.elements";

const Estudio = () => {
	return (
		<>
			<EstudioContainer>
				<EstudioHeader>THE STUDIO</EstudioHeader>
				<Slider />
			</EstudioContainer>
		</>
	);
};

export default Estudio;
