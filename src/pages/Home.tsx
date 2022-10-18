import "./Home.css";

import Button from "../components/Button/Button";
import { FaUserAstronaut, FaFileCode, FaGithub, FaLinkedin } from "react-icons/fa";
import Photo from "../components/Photo/Photo";

const Home = () => {
  return (
    <>
      <div className="blur">
        <div className="card">
          <Photo />
          <div className="infos">
            <h1>Fernando Carvalho</h1>
            <p>Desenvolvedor Front-End</p>
          </div>

          <div className="buttons">
            <Button
              path="/sobre"
              name={"Quem sou eu?"}
              icon={<FaUserAstronaut className="icon_pulse" />}
            ></Button>

            <Button
              path="/projetos"
              name={"Projetos"}
              icon={<FaFileCode className="icon_pulse" />}
            />
            <a
              id="link-home"
              href="https://www.linkedin.com/in/fecarvalhodev/"
              target="_blank"
            >
              <span>
                <FaLinkedin className="icon_pulse" />
              </span>
              Linkedin
            </a>
            <a id="link-home" href="https://github.com/fescarvalho" target="_blank">
              <span>
                <FaGithub className="icon_pulse" />
              </span>
              Github
            </a>
          </div>
          <p>Desenvolvido por @Fernando Carvalho</p>
        </div>
      </div>
    </>
  );
};

export default Home;
