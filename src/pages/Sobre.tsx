import { FaArrowDown } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Document from "../assets/dowloads/Currículo(Dev) - Fernando da Silva Carvalho (1).pdf";
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
            <h2 className="typing-animation">Ola, seja muito bem vindo!!</h2>
            <div className="curriculo">
              <a href={Document} download="FernandoCarvalho.pdf" type="application/pdf">
                <FaArrowDown className="iconDown" /> Currículo
              </a>
              <p>Clique para fazer dowload do meu curriculo.</p>
            </div>

            <ul>
              <li>
                Me chamo Fernando, sou tecnólogo em Analise e Desenvolvimento de Sistemas
                desde 2019 e Pós-Graduado em Business intelligence, big data e analytics
                (Ciência de Dados).
              </li>

              <li>
                Sou apaixonado por tecnologia, possuo sólidos conhecimentos em
                tecnologias, voltadas para o desenvolvimento web FrontEnd, como
                Javascript, ReactJs, Typescript. Estou sempre em contínuo aprendizado e
                atualização.
              </li>
              <li>
                Atualmente, trabalho com vendas e comércio, e busco uma transição de
                carreira para minha área de formação.
              </li>
              <li>Estou disponível para novas oportunidades e desafios!</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
