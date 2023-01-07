import { FaArrowDown } from "react-icons/fa";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";

import "./Sobre.css";

const Sobre = () => {
  return (
    <>
      <Header title="Quem sou eu?" nameOne="Home" nameTwo="Projetos" toOne="/" toTwo="/projetos" />
      <motion.div
        className="sobre"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="content">
          <div className="text">
            <h2 className="typing-animation">Ola, seja muito bem vindo!!</h2>
            <div className="curriculo">
              <a
                className="button"
                href="https://drive.google.com/u/0/uc?id=1vuZ8rQhCoZQa3gen0og5WVi_o51O5M85&export=download"
              >
                <FaArrowDown className="iconDown" /> Currículo
              </a>
              <p>Clique para fazer dowload do meu curriculo.</p>
            </div>

            <ul>
              <li>
                Me chamo Fernando, sou tecnólogo em Analise e Desenvolvimento de Sistemas desde 2019
                e Pós-Graduado em Business intelligence, big data e analytics (Ciência de Dados).
              </li>

              <li>
                Sou apaixonado por tecnologia e possuo sólidos conhecimentos nas seguintes
                tecnologias:
              </li>
              <li className="Tec">
                <h4>FrontEnd: </h4>
                <p>JavaScritpt, TypeScritpt, ReactJs, HTML, CSS, Twailwind,SASS, entre outras.</p>
              </li>
              <li className="Tec">
                <h4>BackEnd: </h4>
                <p>NodeJs, SQL, Docker</p>
              </li>
              <li className="Tec">
                <h4> BD NoSQL: </h4>
                <p>MongoDB</p>
              </li>
              <li className="Tec">
                <h4> BD SQL: </h4>
                <p>PostgresSQL</p>
              </li>
              <li className="Tec">
                <h4> Versionamento:</h4>
                <p>GIT, GitHub</p>
              </li>
              <li>
                Estou sempre em constante estudo e atualização, em busca de uma oportunidade de
                colocar todo meu conhecimento em prática.
              </li>
              <li>Estou disponível para novas oportunidades e desafios!</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Sobre;
