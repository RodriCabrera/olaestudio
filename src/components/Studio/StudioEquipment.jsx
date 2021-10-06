import React from "react";
// import studioPhoto1 from "../../assets/estudio-fotos/estudio-1.jpg";
// import studioPhoto2 from "../../assets/estudio-fotos/estudio-2.jpg";
// import studioPhoto3 from "../../assets/estudio-fotos/estudio-3.jpg";
// import studioPhoto4 from "../../assets/estudio-fotos/estudio-4.jpg";
import Slider from "./Slider";
import { StudioEqTitle, StudioEqText } from "./StudioEquipment.elements";

const StudioEquipment = () => {
	// Crear array con el equipamiento del estudio
	const equipment = {
		interfaces: [
			"Universal Audio Apollo 8p",
			"Universal Audio Apollo 8",
			"(Paquete UAD Plugins + UNISON)",
			"RME Babyface PRO FS",
		],
		auriculares: [
			"Beyerdynamic DT770 x2",
			"Sennheiser HD202 x3",
			"Sony MDR 7506",
			"Audio Technica ATHM35",
			"Sennheiser HD650 (open back)",
			"AKG K702 (open back)",
		],
		microfonos: [
			"Neumann TLM 103",
			"ADK Zeus x2",
			"ADK Thor x4",
			"Line Audio CM3 x2",
			"MXL 603 x2",
			"Sennheiser MKH416",
			"EV RE20",
			"Shure SM7 x2",
			"AKG D112",
			"Sennheiser 421 x3",
			"Shure 57 x6",
			"Audix D6",
			"NoHype (Ribbon) x2",
			"Cascade Fat Head (Ribbon) x2",
		],
		guitarras: [
			"Gibson Melody Maker 1969",
			"Fender Stratocaster Highway one (Lindy Fralin Pickups)",
			"Axl Marquee MJZ",
			"D'Angelico Excel SS (Semihollow)",
			"Martin & Co LX1 (Acustica)",
			"Martin & Co Backpacker (Acustica)",
			"Yamaha APX-500 (Acustica)",
			"Cordoba GK Studio (Nylon)",
			"Guitarra Baritono Luthier (Nylon)",
		],
		bajos: [
			"Fender Jazz Bass V USA",
			"Fender Precision Bass USA",
			"Michael Kelly (Acustico)",
		],
		misc: [
			"Casiano Palomino (Bandurria Peruana)",
			"Epiphone Mandobird (Mandolina Electrica)",
			"Cuatro Venezolano Luthier",
			"Rosini (Cavaquinho)",
			"Novation MiniNova (Sintetizador)",
			"Roland TD-1K (Bateria Electrica)",
		],
		pedales: [
			"Hermida Zendrive (Overdrive)",
			"	Chase Bliss Brothers Analog Gain Stage (Overdrive/Fuzz)",
			"Guild Super Overdrive",
			"Moog MF Drive (Overdrive)",
			"Boss Bass Overdrive ODB3",
			"Earthquaker Devices Spatial Delivery (Envelope Filter)",
			"3leaf Audio Proton (Envelope Filter)",
			"Dedalo FX Automatic Filter (Envelope Filter)",
			"Real MC Coy RMC 3 (Wah)",
			"Earthquaker Devices Organizer (Organ Emulator)",
			"Earthquaker Devices BitCommander (Synth)",
			"Strymon Mobius (Multidimensional Modulation)",
			"DLS RotoSIM (Rotary)",
			"DOD Bass Stereo Chorus",
			"MXR Bass Octave Deluxe",
			"Strymon DIG (Digital Delay)",
			"Red Panda Particle (Delay)",
			"Xotic SP Compressor",
			"EBS MultiComp (Dual band compressor)",
			"Rocktron Banshee II (Talk Box)",
			"Line 6 M9 (Multieffects)",
			"TC Electronic Ditto (Looper)",
			"Boss Chromatic Tuner TU3",
		],
		amplificadores: [
			"Two Rock Studio Pro 35w + Caja con WGS ET 65",
			"Musicman RD 110 Fifty - 50 W",
			"ADA Rocket 20R - 20W Class A",
			"Orange Crush CR20L - 20W",
			"Orange Micro Crush",
			"Gallien Krueger MBS150 (Bajo)",
		],
		di: ["Telefunken TDP2", "JDI Radial", "DIYRE Reamp"],
		controladoresMidi: [
			"Ableton Push 2",
			"Arturia KeyLab Essential 61",
			"Novation Launchpad Pro",
			"Novation Launchkey 25",
			"Akai MPK Mini MK2",
			"M-Audio Keyrig 49",
		],
		monitores: ["Mackie HR824 mkII", "Alesis MK2", "KRK Rokit 5"],
		otros: [
			"Dbx 286A Mic Preamp/Processor (Pre)",
			"FMR RNC 1773 (Compressor)",
			"Sansui SC1330 (Tape Deck)",
			"Akai AP003 (Turntable)",
			"Tascam Porta 03 mkII (Porta Studio)",
		],
	};
	console.log(equipment);
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
