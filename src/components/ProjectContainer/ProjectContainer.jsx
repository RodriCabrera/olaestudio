import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
	ProjectInfo,
	ProjectVideo,
	ProjectWrapper,
	StyledBackLink,
} from "./ProjectContainer.elements";

const ProjectContainer = ({ id, client, title }) => {
	const { width } = useWindowSize();
	console.log(client);
	function autoWidthVideo() {
		let w = width - 38;
		return w.toString();
	}

	const conditionalInfo = () => {
		return client === "undefined" ? <></> : `${client} | `;
	};
	return (
		<>
			<StyledBackLink to="/portfolio">Back to Projects</StyledBackLink>
			<ProjectWrapper>
				<ProjectVideo>
					<iframe
						width={autoWidthVideo()}
						height="415"
						src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&modestbranding=0`}
						title="YouTube video player"
						frameborder="0"
						modestbranding="0"
						showinfo="0"
						allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</ProjectVideo>
				<ProjectInfo>
					<h2>
						{conditionalInfo()}
						{title}
					</h2>
				</ProjectInfo>
			</ProjectWrapper>
		</>
	);
};

export default ProjectContainer;
