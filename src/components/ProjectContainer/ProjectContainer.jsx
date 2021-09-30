import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import {
	ProjectInfo,
	ProjectVideo,
	ProjectWrapper,
} from "./ProjectContainer.elements";

const ProjectContainer = ({ id }) => {
	const { width } = useWindowSize();

	function autoWidthVideo() {
		let w = width - 38;
		return w.toString();
	}
	return (
		<>
			<p>current id: {id}</p>
			<Link to="/">Back</Link>
			<ProjectWrapper>
				<ProjectVideo>
					<iframe
						width={autoWidthVideo()}
						height="415"
						src="https://www.youtube.com/embed/mGj7L2L7TEM?rel=0"
						title="YouTube video player"
						frameborder="0"
						rel="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</ProjectVideo>
				<ProjectInfo>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					atque voluptate inventore ullam accusamus at libero culpa nobis
					aliquid fugit nostrum perferendis cumque, quidem consequatur est
					totam? Voluptatibus, quo numquam.Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Corporis atque voluptate inventore ullam
					accusamus at libero culpa nobis aliquid fugit nostrum perferendis
					cumque, quidem consequatur est totam? Voluptatibus, quo numquam.
				</ProjectInfo>
			</ProjectWrapper>
		</>
	);
};

export default ProjectContainer;
