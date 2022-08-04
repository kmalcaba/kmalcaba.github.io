import "./ProjectCard.scss";
import Button from "../Button/Button";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

function ProjectCard({
  project: { title, tags, description, image, previewLink, sourceLink },
}) {
  const previewHandler = () => {};

  const sourceHandler = () => {};

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{description}</p>
      <div className="project-card-footer">
        <Button
          className="btn-primary"
          onClick={previewHandler}
          Icon={AiFillEye}
        >
          Preview
        </Button>
        <Button
          className="btn-primary"
          onClick={sourceHandler}
          Icon={AiFillGithub}
        >
          Github
        </Button>
      </div>
    </div>
  );
}
export default ProjectCard;
