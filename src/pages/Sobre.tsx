import { FaArrowDown } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Sobre.css";

const Sobre = () => {
  return (
    <>
      <div className="sobre">
        <Header
          title="Sobre Mim"
          nameOne="Home"
          nameTwo="Projetos"
          toOne="/"
          toTwo="/projetos"
        />

        <div className="content">
          <div className="text">
            <div className="curriculo">
              <a
                href="../../public/Currículo(Dev) - Fernando da Silva Carvalho (1).pdf"
                download
              >
                <FaArrowDown className="iconDown" /> Currículo
              </a>
            </div>
            <p>
              Ola, sou um aficionado por tecnologia, buscando uma transição de carreira
              para área. Possuo sólidos conhecimentos em tecnologias, voltadas para o
              desenvolvimento web, como Javascript, ReactJs, Typescript e NodeJs. Sempre
              em contínuo aprendizado e atualização.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
