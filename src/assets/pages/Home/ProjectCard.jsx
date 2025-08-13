import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="projectCard">
      {/* Left Side - Text & GitHub */}
      <div className="projectText col-10">
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="githubIcon"
        >
          <FaGithub size={28} />
        </a>
      </div>

      {/* Right Side - Image */}
      <div
        className="projectImage"
        onClick={() => window.open(image, "_blank")} // Opens image in new tab
        style={{ cursor: "pointer" }} // Change cursor to pointer
      >
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
