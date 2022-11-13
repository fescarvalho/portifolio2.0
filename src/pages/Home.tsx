import "./Home.css";
import Button from "../components/Button/Button";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaFileCode, FaGithub, FaLinkedin } from "react-icons/fa";
import Photo from "../components/Photo/Photo";

const Home = () => {
  return (
    <>
      <motion.div
        className="blur"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
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
      </motion.div>
    </>
  );
};

export default Home;
