import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "./Estudio.elements";

const Slider = () => {
	const pics = [
		"https://i.pinimg.com/originals/f9/ed/ec/f9edec77d3f409825afd2d89f93a0dc3.jpg",
		"https://i.pinimg.com/originals/4e/99/41/4e9941426ce26603c44e84ae37f2a1c1.jpg",
		"https://i.pinimg.com/originals/c3/4d/01/c34d0195df7b02e84f10b22457354e5e.jpg",
		"https://assets-global.website-files.com/5deef90e2b03a42deaf1f5f9/5f10dc68948f606b884b062b_How-to-Make-a-Music-Studio_Featured.jpg",
		"https://www.wallpapertip.com/wmimgs/30-306968_music-studio-wallpapers-music-studio-pictures-hd.jpg",
	];

	// const mapPics = () => {
	// 	const indexes = [];
	// 	for (let i = 0; i < pics.length; i++) {
	// 		indexes.push(i);
	// 	}
	// 	return indexes.map((elem) => {
	// 		return (
	// 			<Slide index={elem} key={elem.toString()}>
	// 				<ImageWithZoom src={pics[elem]} />
	// 			</Slide>
	// 		);
	// 	});
	// };

	return (
		<>
			<Carousel touch={true} interval={null}>
				<Carousel.Item>
					<Image src={pics[4]} alt="test slide" />
					<Carousel.Caption>
						<h3>STUDIO X</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image src={pics[2]} alt="test slide" />

					<Carousel.Caption>
						<h3>STUDIO 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image src={pics[3]} alt="test slide" />
					<Carousel.Caption>
						<h3>STUDIO 3</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Slider;
