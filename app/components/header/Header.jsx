import style from "./Header.module.css";
import cvPdf from "../../assets/CV.pdf";
import ChangeLanguaje from "./utils/ChangeLanguaje";
import DarkLightMode from "./utils/DarkLightMode";

export default function Header({ languaje, setLanguaje, isScrolled }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const yCoordinate =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: yCoordinate,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${style.header} ${isScrolled ? style.scrolled : ""}`}
      id="header"
    >
      <ChangeLanguaje languaje={languaje} setLanguaje={setLanguaje} />
      <div className={style.containerHeader}>
        <span
          className={style.highlightable}
          onClick={() => scrollToSection("Skills")}
        >
          Habilidades
        </span>
        <span
          className={style.highlightable}
          onClick={() => scrollToSection("AboutMe")}
        >
          Sobre mí
        </span>
        <span
          className={style.highlightable}
          onClick={() => scrollToSection("Projects")}
        >
          Proyectos
        </span>
        <span
          className={style.highlightable}
          onClick={() => scrollToSection("Experience")}
        >
          Experiencia
        </span>
        <span
          className={style.highlightable}
          onClick={() => scrollToSection("ContacMe")}
        >
          Contacto
        </span>
        <a href={cvPdf} download={"CV_Dario_Chinea_Delgado.pdf"}>
          <span className={style.highlightable}>Descargar CV</span>
        </a>
      </div>
      <DarkLightMode />
    </div>
  );
}
