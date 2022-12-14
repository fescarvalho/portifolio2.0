import "./Home.css";
import Button from "../components/Button/Button";
import logo from "../../public/icons/logos/Logo5.png";

import ParticlesComponent from "../components/Particles/Particles";
import { FaUserAstronaut, FaFileCode, FaGithub, FaLinkedin } from "react-icons/fa";
import Photo from "../components/Photo/Photo";

const Home = () => {
  return (
    <>
      <ParticlesComponent />
      <div className="blur">
        <div className="card">
          <Photo />
          <div className="infos">
            <h1>Fernando Carvalho</h1>

            <p className="typing-animation2">Desenvolvedor FullStack</p>
          </div>

          <div className="buttons">
            <Button
              path="/sobre"
              name={"Sobre"}
              icon={<FaUserAstronaut className="icon_pulse" />}
            ></Button>

            <Button
              path="/projetos"
              name={"Projetos"}
              icon={<FaFileCode className="icon_pulse" />}
            />
            <a
              className="button"
              id="link-home"
              href="https://www.linkedin.com/in/fecarvalhodev/"
              target="_blank"
            >
              <span>
                <FaLinkedin className="icon_pulse" />
              </span>
              Linkedin
            </a>
            <a
              className="button"
              id="link-home"
              href="https://github.com/fescarvalho"
              target="_blank"
            >
              <span>
                <FaGithub className="icon_pulse" />
              </span>
              Github
            </a>
          </div>
          <div className="imgfooter">
            <img src={logo} alt="" />
            <p>Desenvolvido por @Fernando Carvalho</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
