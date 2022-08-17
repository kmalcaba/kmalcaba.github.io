import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ContainerWrapper, MotionWrapper } from "../../wrapper";
import { images } from "../../constants";
import projectsJSON from "../../projects.json";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    ...projectsJSON.projects,
    {
      id: 123,
      title: "Project Title",
      tags: ["ReactJS", "SCSS"],
      description:
        "Curabitur ante urna, hendrerit eget mi at, venenatis scelerisque massa.",
      image: images.about01,
      previewLink: "/",
      sourceLink: "/",
    },
    {
      id: 456,
      title: "Project 2",
      tags: ["JavaScript", "HTML/CSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: images.about02,
      previewLink: "/",
      sourceLink: "/",
    },
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
