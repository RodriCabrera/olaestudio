import React from "react";
import { useParams } from "react-router";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";

const Project = () => {
	const { id, title, client } = useParams();
	return (
		<div>
			<ProjectContainer
				id={id}
				title={title}
				client={client}
			></ProjectContainer>
		</div>
	);
};

export default Project;
