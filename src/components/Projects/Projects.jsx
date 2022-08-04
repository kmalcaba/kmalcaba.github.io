import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";

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
    <div>
      {
        // TODO: Add filtering logic here
      }
      <motion.div
        transition={{ duration: 0.3, delayChildren: 0.3, staggerChildren: 0.3 }}
        className="project-cards"
      >
        <ProjectCard project={project} />
        <ProjectCard project={project} />
      </motion.div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Projects), "projects");
