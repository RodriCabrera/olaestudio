import React from "react";
import { ProjectVideo, ProjectWrapper } from "./ProjectContainer.elements";

const ProjectContainer = ({ id }) => {
	return (
		<>
			<h1>ProjectContainer, with id: {id}</h1>
			<ProjectWrapper>
				<iframe
					width="853"
					height="480"
					src=""
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
				<ProjectVideo></ProjectVideo>
			</ProjectWrapper>
		</>
	);
};

export default ProjectContainer;
