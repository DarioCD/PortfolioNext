import style from "./Experience.module.css";

import salesianos from "../../assets/salesianos.png";
import atos from "../../assets/atos.png";
import eviden from "../../assets/eviden.jpg";
import Image from "next/image";

export default function Expereince() {
  return (
    <>
      <h1 id="Experiencia">Experiencia</h1>
      <div className={style.timeline}>
        <div className={`${style.container} ${style.leftContainer}`}>
          <Image src={salesianos} alt="foto" />
          <div className={style.textBox}>
            <h2>CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
            <small>Salesianos la cuesta - (Septiembre 2021 - Mayo 2023)</small>
            <p>
              Es un ciclo superiro el cual cursé después de haber terminado mis
              estudios de bachillerato
            </p>
            <p>Tecnologías utilizadas :</p>
            <ul>
              <li>
                - Respcto al backend vi bases de datos (MySQL, Oracle, H2),
                herramientas (Eclipse), frameworks (Spring Boot, Node.js).
                También amprendí a construir aplicaciones eficientes y
                escalables.
              </li>
              <li>
                - En el front, abrodé React y React Native, junto con
                herramientas como Visual Studio Code e IntelliJ IDEA. Aprendí a
                crear interfaces dinámicas y aplicaciones móviles.
              </li>
              <li>
                - Los lenguajes clave en el curso fueron: Python para
                versatilidad, Java para robustez y JavaScrpt para interactividad
                en el front y el back.
              </li>
            </ul>
            <span className={style.leftArrowContainer}></span>
          </div>
        </div>

        <div className={`${style.container} ${style.rightContainer}`}>
          <Image src={atos} alt="foto" />
          <div className={style.textBox}>
            <h2>Application developer</h2>
            <small>Atos - (Marzo 2023 - Mayo 2023)</small>
            <p>
              Aquí hice mis práctica de fin de grado, en los meses que pasé aqui
              estuve fromándome y haciendo varios proyecto
            </p>
            <p>Elementos a destacar:</p>
            <ul>
              <li>
                - Utilicé Angular y Spring en conjunto. Esto me permitió ampliar
                mis conocimientos en Spring y aprender Angular, ya que nunca lo
                había visto. Trabajar en equipo, cumplir plazos y utilizar
                sprints también fueron aspectos importantes de mi experiencia,
                dado que el proyecto final era en grupo de 5, con 1 sprint cada
                2 semanas.
              </li>
              <li>
                - Dicho proyecto consistió en crear una aplicación para llevar
                el registro del estado físico del usuario, incluyendo JWT y
                login con Google.
              </li>
            </ul>
            <span className={style.rightArrowContainer}></span>
          </div>
        </div>

        <div className={`${style.container} ${style.leftContainer}`}>
          <Image src={eviden} alt="foto" />
          <div className={style.textBox}>
            <h2>Application developer</h2>
            <small>Eviden - (Julio 2023 - actualidad)</small>
            <p>
              Después de completar mis prácticas en Atos, me contrataron gracias
              a mis habilidades y mi trabajo duro. Cada día aprendo nuevas cosas
              gracias a mis compñeros, muchos de ellos con amplia experiencia.
              Desde que me uní, he adquirido conocimientos significativos sobre
              la nube, especialmente en AWS. Los proyectos que he realizado son
              ejemplos concretos, ya que todos sus endpoints están desplegados
              en AWS. Esta experiencia continua enriqueciendo mi crecimiento
              profesional y técnico.
            </p>
            <span className={style.leftArrowContainer}></span>
          </div>
        </div>
      </div>
    </>
  );
}
