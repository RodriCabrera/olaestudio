import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "./Estudio.elements";
import studioPhoto1 from "../../assets/estudio-fotos/estudio-1.jpg";
import studioPhoto2 from "../../assets/estudio-fotos/estudio-2.jpg";
import studioPhoto3 from "../../assets/estudio-fotos/estudio-3.jpg";
import studioPhoto4 from "../../assets/estudio-fotos/estudio-4.jpg";

const Slider = () => {
	const studioPhotos = [
		{
			id: 1,
			img: studioPhoto1,
			title: "title1",
			description: "photo 1 description",
		},
		{
			id: 2,
			img: studioPhoto2,
			title: "title2",
			description: "photo 2 description",
		},
		{
			id: 3,
			img: studioPhoto3,
			title: "title3",
			description: "photo 3 description",
		},
		{
			id: 4,
			img: studioPhoto4,
			title: "title4",
			description: "photo 4 description",
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
			<Carousel touch={true} interval={null}>
				{mapPics}
			</Carousel>
		</>
	);
};

export default Slider;
