import "./Home.css";

import Button from "../components/Button/Button";
import { FaUserAstronaut, FaFileCode, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="blur">
        <div className="card">
          <div className="photo">
            <img src="../../../public/foto de perfil.png" />
          </div>

          <div className="buttons">
            <Button path="/sobre" name={"Sobre Mim"} icon={<FaUserAstronaut />}></Button>

            <Button path="/projetos" name={"Projetos"} icon={<FaFileCode />} />
            <a
              id="link-home"
              href="https://www.linkedin.com/in/fecarvalhodev/"
              target="_blank"
            >
              Linkedin
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a id="link-home" href="https://github.com/fescarvalho" target="_blank">
              Github
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          <p>Desenvolvido por @Fernando Carvalho</p>
        </div>
      </div>
    </>
  );
};

export default Home;
