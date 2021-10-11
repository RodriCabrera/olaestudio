import React from "react";
// import studioPhoto1 from "../../assets/estudio-fotos/estudio-1.jpg";
// import studioPhoto2 from "../../assets/estudio-fotos/estudio-2.jpg";
// import studioPhoto3 from "../../assets/estudio-fotos/estudio-3.jpg";
// import studioPhoto4 from "../../assets/estudio-fotos/estudio-4.jpg";
import Slider from "./Slider";
import { StudioEqTitle, StudioEqText } from "./StudioEquipment.elements";
import data from "./studiodata";
const StudioEquipment = () => {
	function mapCategory(cat) {
		return data[cat].map((elem) => <StudioEqText>{elem}</StudioEqText>);
	}

	return (
		<>
			<Slider />
			<StudioEqTitle>Interfaces de Audio</StudioEqTitle>
			{mapCategory("Interfaces de Audio")}
			<StudioEqTitle>Auriculares</StudioEqTitle>
			{mapCategory("Auriculares")}
			<StudioEqTitle>Microfonos</StudioEqTitle>
			{mapCategory("Micrófonos")}
			<StudioEqTitle>Guitarras</StudioEqTitle>
			{mapCategory("Guitarras")}
			<StudioEqTitle>Bajos</StudioEqTitle>
			{mapCategory("Bajos")}
			<StudioEqTitle>Mics</StudioEqTitle>
			{mapCategory("Misc")}
			<StudioEqTitle>Pedales</StudioEqTitle>
			{mapCategory("Pedales")}
			<StudioEqTitle>Amplificadores</StudioEqTitle>
			{mapCategory("Amplificadores")}
			<StudioEqTitle>DI</StudioEqTitle>
			{mapCategory("DI")}
			<StudioEqTitle>Controladores MIDI</StudioEqTitle>
			{mapCategory("Controladores MIDI")}
			<StudioEqTitle>Monitores</StudioEqTitle>
			{mapCategory("Monitores")}
			<StudioEqTitle>Otros</StudioEqTitle>
			{mapCategory("Otros")}
		</>
	);
};

export default StudioEquipment;
