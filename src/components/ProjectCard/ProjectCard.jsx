import "./ProjectCard.scss";
import Button from "../Button/Button";
import HighlightLink from "../HighlightLink/HighlightLink";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

function ProjectCard({
  project: { title, tags, description, image, previewLink, sourceLink },
  handleFilter,
}) {
  const previewHandler = () => {};

  const sourceHandler = () => {};

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} onClick={() => handleFilter(tag)}>
            <HighlightLink>{tag}</HighlightLink>
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <div className="project-card-footer">
        <a href={previewLink} target="_blank" rel="noreferrer">
          <Button
            className="btn-primary"
            onClick={previewHandler}
            Icon={AiFillEye}
          >
            Preview
          </Button>
        </a>
        <a href={sourceLink} target="_blank" rel="noreferrer">
          <Button
            className="btn-primary"
            onClick={sourceHandler}
            Icon={AiFillGithub}
          >
            Github
          </Button>
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
