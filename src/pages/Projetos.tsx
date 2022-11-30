import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
import { motion } from "framer-motion";
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
      <motion.div
        className="projetcmotion"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}
      >
        <div className="main">
          <div className="projects">
            <div className="projects-main">
              <Swiper
                spaceBetween={100}
                slidesPerView={3}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  100: {
                    spaceBetween: 100,
                    slidesPerView: 1,
                  },
                  1300: {
                    spaceBetween: 100,
                    slidesPerView: 2,
                  },
                  1600: {
                    spaceBetween: 100,
                    slidesPerView: 3,
                  },
                }}
              >
                {projetos.map((projeto) => (
                  <SwiperSlide key={projeto.title}>
                    <Project
                      title={projeto.title}
                      tecnologias={projeto.tecnologias}
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
      </motion.div>
      <Footer />
    </>
  );
};

export default Projetos;
