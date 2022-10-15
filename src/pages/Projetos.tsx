import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";

import "./Projetos.css";

const Projetos = () => {
  return (
    <>
      <Header title="Projetos" />
      <div className="projects">
        <div className="projects-main">
          <Project
            title="Name"
            tecnologiasBack={["name1", "name2", "name3", "name4", "name5"]}
            tecnologiasFront={["name1", "name2", "name3", "name4", "name5"]}
            linkGithub="https://github.com/fescarvalho"
            linkLinkedin="https://www.linkedin.com/in/fecarvalhodev/"
            background="../../public/back.jpg"
          />
          <Project
            title="Name"
            tecnologiasBack={["name1", "name2", "name3", "name4", "name5"]}
            tecnologiasFront={["name1", "name2", "name3", "name4", "name5"]}
            linkGithub="https://github.com/fescarvalho"
            linkLinkedin="https://www.linkedin.com/in/fecarvalhodev/"
            background="../../public/back.jpg"
          />
          <Project
            title="Name"
            tecnologiasBack={["name1", "name2", "name3", "name4", "name5"]}
            tecnologiasFront={["name1", "name2", "name3", "name4", "name5"]}
            linkGithub="https://github.com/fescarvalho"
            linkLinkedin="https://www.linkedin.com/in/fecarvalhodev/"
            background="../../public/back.jpg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projetos;
