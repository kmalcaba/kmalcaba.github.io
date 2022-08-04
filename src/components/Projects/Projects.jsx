import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";

import { images } from "../../constants";

function Projects() {
  const project = {
    title: "Project Title",
    tags: ["ReactJS", "HTML/CSS"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis qui ad consectetur quos dolorem consequatur exercitationem fugit debitis repudiandae placeat aperiam, iste animi laboriosam! Porro laborum vel possimus recusandae?",
    image: images.about01,
    previewLink: "/",
    sourceLink: "/",
  };

  return (
    <div className="projects">
      {
        // TODO: Add filtering logic here
      }
      <ProjectCard project={project} />
      <ProjectCard project={project} />
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Projects), "projects");
