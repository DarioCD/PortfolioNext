import style from "./Header.module.css"
import cvPdf from "../../assets/CV.pdf";
import ChangeLanguaje from "./utils/ChangeLanguaje";
import DarkLightMode from "./utils/DarkLightMode";

export default function Header({ languaje, setLanguaje }) {
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
    // useEffect(() => {
    //     const header = document.getElementById("header");
    //     function updateHeaderStyle() {
    //         if (window.scrollY > 0 && windowWidth > 800) {
    //             header.classList.add("scrolled");
    //         } else {
    //             header.classList.remove("scrolled");
    //         }
    //     }
    //     window.addEventListener("scroll", updateHeaderStyle);
    //     updateHeaderStyle();
    //     return () => {
    //         window.removeEventListener("scroll", updateHeaderStyle);
    //     };
    // }, [windowWidth]);
    return (
        <div className={style.header} id="header">
            <ChangeLanguaje languaje={languaje} setLanguaje={setLanguaje} />
            <div className={style.containerHeader}>
                <span className={style.highlightable}>
                    Habilidades
                </span>
                <span className={style.highlightable}>
                    Sobre mí
                </span>
                <span className={style.highlightable}>
                    Proyectos
                </span>
                <span className={style.highlightable}>
                    Experiencia
                </span>
                <span className={style.highlightable}>
                    Contacto
                </span>
                <a href={cvPdf} download={"CV_Dario_Chinea_Delgado.pdf"}>
                    <span className={style.highlightable}>
                        Descargar CV
                    </span>
                </a>
            </div>
            <DarkLightMode />
        </div>
    );
}
