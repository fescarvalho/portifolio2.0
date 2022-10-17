import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import "./Projetos.css";

const Projetos = () => {
  const carrousel = useRef<HTMLInputElement | any>(null);
  const [width, setWidtht] = useState<number>(0);
  const [mobile, setMobile] = useState<number>();

  useEffect(() => {
    setWidtht(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
    setMobile(window.innerWidth);
  }, []);

  return (
    <>
      <Header title="Projetos" />
      <div className="main">
        <motion.div className="projects" ref={carrousel}>
          <motion.div
            className="projects-main"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 100, left: -width }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Project
              title="Dogs-Rede Social"
              tecnologiasBack={["MongoDB"]}
              tecnologiasFront={["React", "ReactHooks", "CSS Modules"]}
              linkGithub="https://github.com/fescarvalho/Dogs"
              linkLinkedin="https://dogs-social.vercel.app/"
              background="https://i.picasion.com/pic92/7b72513b706acc751bea8f6b651abdbd.gif"
            />
            <Project
              title="BikeCraft"
              tecnologiasBack={["Not Backend"]}
              tecnologiasFront={["HTML", "CSS", "JavaScript"]}
              linkGithub="https://github.com/fescarvalho/bikcraft"
              linkLinkedin="https://bikcraftmotors.netlify.app/"
              background="https://i.picasion.com/pic92/8513d828ad1f3f83fa5ed9cda7fcb411.gif"
            />
            <Project
              title="Animais Fantásticos"
              tecnologiasBack={["Not Backend"]}
              tecnologiasFront={["HTML", "CSS", "JavaScript"]}
              linkGithub="https://github.com/fescarvalho/animals"
              linkLinkedin="https://animalsf.netlify.app/"
              background="https://i.picasion.com/pic92/0a0faab4d1669cf1820dd082f620aa00.gif"
            />
            <Project
              title="Ranked"
              tecnologiasBack={["Not Backend"]}
              tecnologiasFront={["React", "CSS modules"]}
              linkGithub="https://github.com/fescarvalho/RanekdReact"
              linkLinkedin="https://ranekd-react.vercel.app/"
              background="https://i.picasion.com/pic92/7d714771e7bd48f76cd55687e6c64c9d.gif"
            />
            <Project
              title="Wather App"
              tecnologiasBack={["Not Backend"]}
              tecnologiasFront={["HTML", "CSS", "JavaScript", "JQuery", "Axios"]}
              linkGithub="https://github.com/fescarvalho/weatehr_app"
              linkLinkedin="https://fescarvalho.github.io/weatehr_app/"
              background="https://i.picasion.com/pic92/bdf552fb712e616045ee676c6556398b.gif"
            />
            <Project
              title="App Estacionamento"
              tecnologiasBack={["Not Backend"]}
              tecnologiasFront={["React", "CSS Modules", "Axios"]}
              linkGithub="https://github.com/fescarvalho/app_estacionamento"
              linkLinkedin="https://app-estacionamento.vercel.app/historico"
              background="https://i.picasion.com/pic92/827ac503b7a22b258229e241f2ac5c46.gif"
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
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Projetos;
