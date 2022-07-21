import "./ProjectCard.scss";

function ProjectCard({
  project: { title, tags, description, previewLink, sourceLink },
}) {
  const previewHandler = () => {};

  const sourceHandler = () => {};

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{description}</p>
      <div className="project-card-footer">
        <button className="btn-primary" onClick={previewHandler}>
          Preview
        </button>
        <button className="btn-primary" onClick={sourceHandler}>
          Github
        </button>
      </div>
    </div>
  );
}
export default ProjectCard;
