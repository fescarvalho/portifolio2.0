import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
import { projetos } from "../components-mock.json";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./Projetos.css";

const Projetos = () => {
  return (
    <>
      <Header title="Projetos" nameOne="Home" nameTwo="Sobre" toOne="/" toTwo="/sobre" />
      <div className="main">
        <div className="projects">
          <div className="projects-main">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                },
                500: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
              }}
            >
              {projetos.map((projeto) => (
                <SwiperSlide key={projeto.title}>
                  <Project
                    title={projeto.title}
                    tecnologiasFront={projeto.tecnologiasFront}
                    tecnologiasBack={projeto.tecnologiasBack}
                    linkLinkedin={projeto.linkLinkedin}
                    linkGithub={projeto.linkGithub}
                    background={projeto.background}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projetos;
