import style from "./Projects.module.css";
import foto from "../../assets/coming-soon.jpg";
import Image from "next/image";
export default function Projects({ windowWidth }) {
  return (
    <div className={style.containerProyectos} id="Projects">
      <h1>Proyectos</h1>
      <p className={style.containerProyectosp}>
        En este espacio, encontrarás una muestra de mis trabajos
      </p>
      <div className={style.containerCardProyectos}>
        <div className={style.cardProyecto}>
          <Image src={foto} alt="foto" className={style.fotoProyecto} />
          <div className={style.infoProyecto}>
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className={style.cardProyectoEnalce}>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className={style.fotoEnlaceGit} alt="GitHub"></div>
              </a>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className={style.fotoEnlaceLink} alt="ver página"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerCardProyectos}>
        <div className={style.cardProyecto}>
          {windowWidth <= 1100 && (
            <Image src={foto} alt="foto" className={style.fotoProyecto} />
          )}
          <div className={style.infoProyecto}>
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className={style.cardProyectoEnalce}>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className={style.fotoEnlaceGit} alt="GitHub"></div>
              </a>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className={style.fotoEnlaceLink} alt="ver página"></div>
              </a>
            </div>
          </div>
          {windowWidth > 1100 && (
            <Image src={foto} alt="foto" className={style.fotoProyecto} />
          )}
        </div>
      </div>
      <div className={style.containerCardProyectos}>
        <div className={style.cardProyecto}>
          <Image src={foto} alt="foto" className={style.fotoProyecto} />
          <div className={style.infoProyecto}>
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className={style.cardProyectoEnalce}>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className={style.fotoEnlaceGit} alt="GitHub"></div>
              </a>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className={style.fotoEnlaceLink} alt="ver página"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerCardProyectos}>
        <div className={style.cardProyecto}>
          {windowWidth <= 1100 && (
            <Image src={foto} alt="foto" className={style.fotoProyecto} />
          )}
          <div className={style.infoProyecto}>
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className={style.cardProyectoEnalce}>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className={style.fotoEnlaceGit} alt="GitHub"></div>
              </a>
              <a
                className={`${style.aEnlace} ${style.highlightableProyecto}`}
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className={style.fotoEnlaceLink} alt="ver página"></div>
              </a>
            </div>
          </div>
          {windowWidth > 1100 && (
            <Image src={foto} alt="foto" className={style.fotoProyecto} />
          )}
        </div>
      </div>
    </div>
  );
}
