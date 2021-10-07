import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import {
	ImagesGrid,
	PortfolioContainer,
	PortfolioWrapper,
	ProjectTitle,
	ImageWrapperLink,
	ProjectTitleWrapper,
	Thumbnail,
	LoadingContainer,
} from "./Portfolio.elements";
import { Spinner } from "react-bootstrap";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const db = getFirestore();
		const projectsCol = db.collection("projects");
		setLoading(true);
		projectsCol
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.empty) {
					console.log("No projects available.");
				} else {
					setProjects(
						querySnapshot.docs.map((elem) => ({ id: elem.id, ...elem.data() }))
					);
				}
			})
			.catch((err) => console.log("ERROR", err))
			.finally(() => setLoading(false));
	}, []);

	const conditionalClient = (project) => {
		return project.client === "undefined" ? <></> : `${project.client} | `;
	};

	const mapProjects = () => {
		return projects.map((project) => (
			<ImageWrapperLink
				key={project.id}
				to={`project/${project.youtubeid}/${project.client}/${project.title}`}
			>
				<Thumbnail
					src={`https://img.youtube.com/vi/${project.youtubeid}/mqdefault.jpg`}
					alt="PortfolioImage"
				/>
				<ProjectTitleWrapper>
					<ProjectTitle>
						{conditionalClient(project)}
						{project.title}
					</ProjectTitle>
				</ProjectTitleWrapper>
			</ImageWrapperLink>
		));
	};
	const loadingContainer = () => {
		return (
			<LoadingContainer>
				<h4>Loading Projects...</h4>
				<Spinner animation="border" />
			</LoadingContainer>
		);
	};
	return (
		<PortfolioContainer>
			<PortfolioWrapper>
				{loading ? (
					loadingContainer()
				) : (
					<ImagesGrid>{mapProjects()}</ImagesGrid>
				)}
			</PortfolioWrapper>
		</PortfolioContainer>
	);
};

export default Portfolio;
