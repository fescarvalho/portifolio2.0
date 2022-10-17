import { FaArrowDown } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Sobre.css";

const Sobre = () => {
  return (
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
            <a href="">
              <FaArrowDown className="iconDown" /> Currículo
            </a>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nulla sint
            sed quas, recusandae eligendi accusamus tempore in, reiciendis adipisci quidem
            optio asperiores eaque doloremque molestias nihil nisi sunt explicabo? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nulla sint sed
            quas, recusandae eligendi accusamus tempore in, reiciendis adipisci quidem
            optio asperiores eaque doloremque molestias nihil nisi sunt explicabo? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nulla sint sed
            quas, recusandae eligendi accusamus tempore in, reiciendis adipisci quidem
            optio asperiores eaque doloremque molestias nihil nisi sunt explicabo? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nulla sint sed
            quas, recusandae eligendi accusamus tempore in, reiciendis adipisci quidem
            optio asperiores eaque doloremque molestias nihil nisi sunt explicabo? Lorem
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sobre;
