import { useParams } from "react-router-dom";
import data from "../../data/projects";
import Nav from "../nav/nav";
import Carousel from "../Carousel/carousel";
import "./_projects.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const { id } = useParams();
  const project = data.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const descriptionWithBreaks = project.description.fr.replace(/\n/g, "<br />");       //dangerouslySetInnerHTML permet de rendre br dans les descriptions comme un élément HTML

  return (
    <>
      <Nav />
      <div className="layout-title">
        <h1 className="project-title">{project.title.fr}</h1>
        {project.progression === "in-progress" ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : project.progression === "completed" ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : null}
      </div>
      <div className="project-layout">
        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: descriptionWithBreaks }} /> 
        </div>
        <div className="carousel">
          <Carousel images={project.images} />
        </div>
      </div>
      <div className="stacks-layout">
        {project.technos.map((techno, index) => (
          <img key={index} src={techno} alt={`Technology ${index}`} loading="lazy" />
        ))}
      </div>
    </>
  );
}

export default Projects;
