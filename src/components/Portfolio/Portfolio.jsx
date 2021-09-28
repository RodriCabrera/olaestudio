import React, { useState, useEffect } from "react";
import {
	ImagesGrid,
	PortfolioContainer,
	PortfolioWrapper,
	ProjectTitle,
	ImageWrapper,
	ProjectTitleWrapper,
} from "./Portfolio.elements";
import PortfolioImage from "./PortfolioImage";

const Portfolio = () => {
	const [data, setData] = useState([]);
	// thumbnail repetida:
	const url =
		"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

	useEffect(() => {
		const projects = [
			{
				id: 1,
				title: "Ranita Mix Binaural",
				description: "description",
				thumbnail: url,
				video: "https://www.youtube.com/watch?v=y6bwOMRLS-E&feature=emb_title",
			},
			{
				id: 2,
				title: "Patagonia | Sol Citra Una IPA Diferente",
				description: "description",
				thumbnail: url,
				video: "https://www.youtube.com/watch?v=wTn07YZZLa0&feature=emb_title",
			},
			{
				id: 3,
				title: "Patagonia | Sol Citra Maridaje",
				description: "description",
				thumbnail: url,
				video: "https://www.youtube.com/watch?v=bDCvbMzCJIY",
			},
			{
				id: 4,
				title: "Patagonia | Sol Citra Brut vs. IPA",
				description: "description",
				thumbnail: url,
				video: "https://www.youtube.com/watch?v=z7UPctyGXU0",
			},
			{
				id: 5,
				title: "Patagonia | Sol Citra Brut vs. IPA",
				description: "description",
				thumbnail: url,
				video: "https://www.youtube.com/watch?v=z7UPctyGXU0",
			},
			{
				id: 6,
				title: "Patagonia | Sendero Sur Cerveza Orgánica",
				description: "description",
				thumbnail: url,
				video: "https://youtu.be/emI0_yjJTXQ",
			},
			{
				id: 7,
				title: "Patagonia | Sendero Sur Causa",
				description: "description",
				thumbnail: url,
				video: "https://youtu.be/RmE30mQ0OEQ",
			},
			{
				id: 8,
				title: "Patagonia | Gin Comunal Elaboración",
				description: "description",
				thumbnail: url,
				video: "https://youtu.be/ZcNdUXxvlQo",
			},
			{
				id: 9,
				title: "Patagonia | Gin Comunal Edición Única",
				description: "description",
				thumbnail: url,
				video: "https://youtu.be/29Pi_8_7BBE",
			},
			{
				id: 10,
				title: "Patagonia | Gin Comunal Atributos",
				description: "description",
				thumbnail: url,
				video: "https://youtu.be/G4rkzgYZ7FE",
			},
		];
		setData(projects);
	}, []);

	const mapProjects = () => {
		const images = data.map((project) => (
			<ImageWrapper key={project.id} to={`project/${project.id}`}>
				<PortfolioImage src={project.thumbnail} />
				<ProjectTitleWrapper>
					<ProjectTitle>{project.title}</ProjectTitle>
				</ProjectTitleWrapper>
			</ImageWrapper>
		));
		return images;
	};

	return (
		<PortfolioContainer>
			<PortfolioWrapper>
				<ImagesGrid>{mapProjects()}</ImagesGrid>
			</PortfolioWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
