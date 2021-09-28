import React from "react";
import { useParams } from "react-router";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";

const Project = () => {
	const { id } = useParams();
	return (
		<div>
			<ProjectContainer id={id}></ProjectContainer>
		</div>
	);
};

export default Project;
