import style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={style.containerGeneral} id="AboutMe">
      <div>
        <div className={style.profile}></div>
      </div>
      <div className={style.containerText}>
        <h1>Sobre mí</h1>
        <p>
          ¡Hola! Soy Dario Chinea Delgado, un apasionado desarrollador Junior
          Full Stack. Con una sólida formación en desarrollo web y una
          curiosidad insaciable por las últimas tendencias tecnológicas, siempre
          estoy ansioso por enfrentar nuevos desafíos y aprender nuevas
          habilidades.
        </p>
        <p>
          A lo largo de mi viaje, he adquirido experiencia en una variedad de
          tecnologías, desde el desarrollo de front-end con React, Angular,
          HTML, CSS... hasta la creación de potentes back-ends utilizando
          tecnologías como Node.js, Spring...
        </p>
        <p>
          Mi pasión por el aprendizaje y la mejora continua me lleva a estar al
          tanto de las últimas tendencias y mejores prácticas en desarrollo web
          y tecnología en general. Disfruto colaborar en equipos
          multidisciplinarios, donde podemos unir nuestras habilidades para
          crear proyectos exitosos y enriquecedores.
        </p>
        <p>
          Me apasiona desarrollar aplicaciones que combinan funcionalidad
          efectiva, atractivo visual y escalabilidad robusta para ofrecer
          experiencias excepcionales a los usuarios.
        </p>
      </div>
    </div>
  );
}
