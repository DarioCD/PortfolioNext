import style from "./Skills.module.css";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import react from "../../assets/physics.png";
import angular from "../../assets/AngularJS-Shield.png";
import pyhton from "../../assets/python.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import typ from "../../assets/Typescript_logo_2020.svg.png";
import node from "../../assets/node-js.png";
import mongo from "../../assets/mongo.png";
import mysql from "../../assets/mysql.png";
import spring from "../../assets/spring-boot-logo.png";
import docker from "../../assets/docker.png";
import git from "../../assets/git.png";
import Image from "next/image";

export default function Skills() {
  return (
    <div className={style.containerHabilidades} id="Skills">
      <div className={style.containerSpanHabilidades}>
        <h1>Habilidades</h1>
      </div>
      <div className={style.containerImgHabilidades}>
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>React</span>
              </Tooltip>
            }
          >
            <Image src={react} alt="foto de React" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Java</span>
              </Tooltip>
            }
          >
            <Image src={java} alt="foto de Java" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Spring</span>
              </Tooltip>
            }
          >
            <Image src={spring} alt="foto de Spring" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Angular</span>
              </Tooltip>
            }
          >
            <Image src={angular} alt="foto de Angular" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Mysql</span>
              </Tooltip>
            }
          >
            <Image src={mysql} alt="foto de MySQL" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>JavaScript</span>
              </Tooltip>
            }
          >
            <Image src={js} alt="foto de JavaScript" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>HTML</span>
              </Tooltip>
            }
          >
            <Image src={html} alt="foto de Html" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>CSS</span>
              </Tooltip>
            }
          >
            <Image src={css} alt="foto de CSS" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Python</span>
              </Tooltip>
            }
          >
            <Image src={pyhton} alt="foto de Python" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>TypeScrpit</span>
              </Tooltip>
            }
          >
            <Image src={typ} alt="foto de TypeScript" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Node</span>
              </Tooltip>
            }
          >
            <Image src={node} alt="foto de Node.js" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>MongoDB</span>
              </Tooltip>
            }
          >
            <Image src={mongo} alt="foto de MongoDB" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Docker</span>
              </Tooltip>
            }
          >
            <Image src={docker} alt="foto de Docker" priority />
          </OverlayTrigger>
        }
        {
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className={style.tootltip}>Git</span>
              </Tooltip>
            }
          >
            <Image src={git} alt="foto de Git" priority />
          </OverlayTrigger>
        }
      </div>
    </div>
  );
}
