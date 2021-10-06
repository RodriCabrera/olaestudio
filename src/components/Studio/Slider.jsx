import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "./Studio.elements";
import studioPhoto1 from "../../assets/estudio-fotos/estudio-1.jpg";
import studioPhoto2 from "../../assets/estudio-fotos/estudio-2.jpg";
import studioPhoto3 from "../../assets/estudio-fotos/estudio-3.jpg";
import studioPhoto4 from "../../assets/estudio-fotos/estudio-4.jpg";

const Slider = () => {
	const studioPhotos = [
		{
			id: 1,
			img: studioPhoto1,
			title: "Control Room",
			description: "",
		},
		{
			id: 2,
			img: studioPhoto2,
			title: "Control Room",
			description: "",
		},
		{
			id: 3,
			img: studioPhoto3,
			title: "Control Room",
			description: "Room Acoustics in every space",
		},
		{
			id: 4,
			img: studioPhoto4,
			title: "Premium Equipment",
			description: "",
		},
	];
	const mapPics = studioPhotos.map((elem) => {
		return (
			<Carousel.Item key={elem.id}>
				<Image src={elem.img} alt="studio photo" />
				<Carousel.Caption>
					<h3>{elem.title}</h3>
					<p>{elem.description}</p>
				</Carousel.Caption>
			</Carousel.Item>
		);
	});
	return (
		<>
			<Carousel touch={true} interval={3000}>
				{mapPics}
			</Carousel>
		</>
	);
};

export default Slider;
