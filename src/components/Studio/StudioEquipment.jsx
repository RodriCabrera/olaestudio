import React from "react";
// import studioPhoto1 from "../../assets/estudio-fotos/estudio-1.jpg";
// import studioPhoto2 from "../../assets/estudio-fotos/estudio-2.jpg";
// import studioPhoto3 from "../../assets/estudio-fotos/estudio-3.jpg";
// import studioPhoto4 from "../../assets/estudio-fotos/estudio-4.jpg";
import Slider from "./Slider";
import { StudioEqTitle, StudioEqText } from "./StudioEquipment.elements";

const StudioEquipment = () => {
	// Crear array con el equipamiento del estudio
	return (
		<>
			<Slider />
			<StudioEqTitle>Interfaces de Audio</StudioEqTitle>
			<StudioEqText>Universal Audio Apollo 8p</StudioEqText>
			<StudioEqText>Universal Audio Apollo 8</StudioEqText>
			<StudioEqText>(Paquete UAD Plugins + UNISON)</StudioEqText>
			<StudioEqText>RME Babyface PRO FS</StudioEqText>
			<StudioEqTitle>Auriculares</StudioEqTitle>
			<StudioEqText>Beyerdynamic DT770 x2</StudioEqText>
			<StudioEqText>Sennheiser HD202 x3</StudioEqText>
			<StudioEqText>Sony MDR 7506</StudioEqText>
			<StudioEqText>Audio Technica ATHM35</StudioEqText>
			<StudioEqText>Sennheiser HD650 (open back)</StudioEqText>
			<StudioEqText>AKG K702 (open back)</StudioEqText>

			<StudioEqTitle>Microfonos</StudioEqTitle>
			<StudioEqText>Neumann TLM 103</StudioEqText>
			<StudioEqText>ADK Zeus x2</StudioEqText>
			<StudioEqText>ADK Thor x4</StudioEqText>
			<StudioEqText>Line Audio CM3 x2</StudioEqText>
			<StudioEqText>MXL 603 x2</StudioEqText>
			<StudioEqText>Sennheiser MKH416</StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>

			<StudioEqTitle>Guitarras</StudioEqTitle>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>
			<StudioEqText></StudioEqText>

			<StudioEqTitle>Bajos</StudioEqTitle>
			<StudioEqTitle>Mics</StudioEqTitle>
			<StudioEqTitle>Pedales</StudioEqTitle>
			<StudioEqTitle>Amplificadores</StudioEqTitle>
			<StudioEqTitle>DI</StudioEqTitle>
			<StudioEqTitle>Controladores MIDI</StudioEqTitle>
			<StudioEqTitle>Monitores</StudioEqTitle>
			<StudioEqTitle>Otros</StudioEqTitle>
		</>
	);
};

export default StudioEquipment;
