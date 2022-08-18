import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";
import { images } from "../../constants";
import projectsJSON from "../../projects.json";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PORTFOLIO = {
  id: "portfolio",
  title: "Portfolio website",
  tags: ["ReactJS", "SCSS", "framer-motion"],
  description: "Portfolio website, developed and designed by yours truly!",
  image: images.portfolio,
  previewLink: "/",
  sourceLink: "https://github.com/kmalcaba/kmalcaba.github.io/tree/source",
};

function Projects() {
  const [projects, setProjects] = useState([
    PORTFOLIO,
    ...projectsJSON.projects,
  ]);
  const [tags, setTags] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setAnimateCard([{ y: 100, opacity: 0 }]);
  };

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  useEffect(() => {
    const tagsArray = projects.map((project) => project.tags);

    setTags(
      tagsArray.reduce(
        (previousValue, currentValue) => [
          ...previousValue,
          ...currentValue.filter((value) => !previousValue.includes(value)),
        ],
        []
      )
    );
  }, [projects]);

  useEffect(() => {
    setTags((previousValue) => [...previousValue, "All"]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (activeFilter === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.tags.includes(activeFilter))
        );
      }
    }, 500);
  }, [activeFilter, projects]);

  return (
    <div className="project">
      <ul className="project-tags">
        {tags.map((item) => (
          <li
            key={`filter-${item}`}
            className={item === activeFilter ? "active" : undefined}
            onClick={() => handleFilter(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.3, delayChildren: 0.3, staggerChildren: 0.5 }}
        className="project-cards"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleFilter={handleFilter}
            />
          ))
        ) : (
          <div className="project-empty">No projects found!</div>
        )}
      </motion.div>
    </div>
  );
}
export default ContainerWrapper(MotionWrapper(Projects), "projects");
