import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
	ProjectInfo,
	ProjectWrapper,
	StyledBackLink,
	ProjectVideo,
} from "./ProjectContainer.elements";

const ProjectContainer = ({ id, client, title }) => {
	const { width, height } = useWindowSize();

	function autoWidthVideo() {
		let w = width - 55;
		return w.toString();
	}
	function autoHeightVideo() {
		let w = height * 0.6;
		return w.toString();
	}

	const conditionalInfo = () => {
		return client === "undefined" ? <></> : `${client} | `;
	};
	return (
		<>
			<ProjectWrapper>
				<StyledBackLink to="/portfolio">Back to Projects</StyledBackLink>
				<ProjectVideo>
					<iframe
						width={autoWidthVideo()}
						height={autoHeightVideo()}
						src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&modestbranding=0`}
						title="YouTube video player"
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
