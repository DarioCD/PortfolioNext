import style from "./Header.module.css";
import cvPdf from "../../assets/CV.pdf";
import ChangeLanguaje from "./utils/ChangeLanguaje";
import DarkLightMode from "./utils/DarkLightMode";
import { useRef, useState } from "react";

export default function Header({
  languaje,
  setLanguaje,
  isScrolled,
  windowWidth,
}) {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

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
      {windowWidth >= 800 || windowWidth === null ? (
        <>
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
              onClick={() => scrollToSection("ContactMe")}
            >
              Contacto
            </span>
            <a href={cvPdf} download={"CV_Dario_Chinea_Delgado.pdf"}>
              <span className={style.highlightable}>Descargar CV</span>
            </a>
          </div>
          <DarkLightMode windowWidth={windowWidth}/>
        </>
      ) : (
        <>
          <p onClick={() => scrollToSection("Start")} className={style.headerNombre}>
            Dario chinea delgado
          </p>
          <div className={style.menuContainer} ref={menuRef}>
            <label htmlFor="burger" className={style.burger}>
              <input
                id="burger"
                type="checkbox"
                onClick={() => {
                  setOpen(!open);
                }}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={`${style.dropdownMenu} ${open ? style.active : style.inactive}`}>
              <h3>
                Navegación
                <br />
              </h3>
              <ul onClick={() => scrollToSection("Skills")}>
                <DropdownItem text={"Habilidades"} />
              </ul>
              <ul onClick={() => scrollToSection("AboutMe")}>
                <DropdownItem text={"Sobre mí"} />
              </ul>
              <ul onClick={() => scrollToSection("Projects")}>
                <DropdownItem text={"Proyectos"} />
              </ul>
              <ul onClick={() => scrollToSection("Experience")}>
                <DropdownItem text={"Experiencia"} />
              </ul>
              {/* <ul onClick={() => scrollToSection("Certificados")}>
                      <DropdownItem text={"Certificados"} />
                    </ul> */}
              <ul onClick={() => scrollToSection("ContactMe")}>
                <DropdownItem text={"Contacto"} />
              </ul>
              <DarkLightMode windowWidth={windowWidth}/>
              <ul>
                <li>
                  <a href={cvPdf} download={"CV - Darío Chinea Delgado"}>
                    <span>Descargar CV</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className={style.dropdownItem}>
      <span> {props.text} </span>
    </li>
  );
}
