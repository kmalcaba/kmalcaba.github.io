import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <div className="project-card">
      <h3>Project Title</h3>
      <ul className="tags">
        <li>ReactJS</li>
        <li>HTML/CSS</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        officiis qui ad consectetur quos dolorem consequatur exercitationem
        fugit debitis repudiandae placeat aperiam, iste animi laboriosam! Porro
        laborum vel possimus recusandae?
      </p>
      <div className="project-card-footer">
        <button className="btn-primary">Preview</button>
        <button className="btn-primary">Github</button>
      </div>
    </div>
  );
}
export default ProjectCard;
