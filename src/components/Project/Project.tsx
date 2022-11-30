import "./Project.css";
import { FaGithub, FaFileCode } from "react-icons/fa";

interface PropsProject {
  title: string;
  tecnologias: string[];
  linkLinkedin: string;
  linkGithub: string;
  background: string;
}

const Project = (props: PropsProject) => {
  return (
    <div className="project" style={{ backgroundImage: `url(${props.background}` }}>
      <div className="projectBlur">
        <h2>{props.title}</h2>
        <div className="project-info">
          <div className="tecnologias">
            <h3>Tecnologias</h3>
            <div className="front">
              <ul>
                {props.tecnologias.map((tec) => (
                  <li key={tec}>{tec}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="links">
            <h3>Links</h3>
            <div className="url">
              <a href={props.linkGithub} target="_blank">
                <FaGithub className="iconRotate" />
              </a>
              <a href={props.linkLinkedin} target="_blank">
                <FaFileCode className="iconRotate" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
