import React from "react";
import { Grid } from "@material-ui/core";
import "./main.css";
import ArrowDown from "../../assets/Vector.svg";
import ProfilePic from "../../assets/profilepic.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

import LogoImg from "../../assets/Logo.png";

export const Home = () => {
  return (
    <>
      <div className="mobile-container">
        <div className="flex-container">
          {/* <div className="logo-container"> */}
          <Logo />
          <img className="logo" alt="Logo" src={LogoImg} />
          {/* </div> */}
        </div>

        <div className="arrow-container">
          <button className="arrow-btn">
            <img className="arrow" src={ArrowDown}></img>
          </button>
        </div>

        <div className="section-1-intro ">
          <p className="white-1 fix-text s1-title">
            Olá, tudo bem? <span className="blue-1">Meu nome é</span>{" "}
          </p>
          <p className="pink-1 fix-text s1-title ">Beatriz Calazans.</p>
          <p className="white-1 fix-text s1-title ">- UI/UX Designer -</p>

          <br />
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <button className="s1-btn-1">Baixar currículo</button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Link to="/producoes">
                <button href="/producoes" className="s1-btn-2">
                  Produções
                </button>
              </Link>
            </Grid>
          </Grid>
        </div>

        <div className="section-2-aboutme">
          <div className="center">
            <p className="pink-2">Sobre mim</p>
          </div>
          <br></br>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <div className="center">
                <img src={ProfilePic}></img>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <br />
              <div className="info-container">
                <ul>
                  <li>Beatriz do Amaral Calazans Serra</li>
                  <li>22 de Novembro de 2000</li>
                  <li>Salvador, BA</li>
                  <li>Engenharia de Softwaer, UCSAL</li>
                </ul>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <div className="info-container">
            <p>
              Bem vindo (a) ao meu seu site/portifólio! Me chamo Beatriz e sou
              apaixonada por arte, design e tecnologia.{" "}
            </p>

            <p>
              De fluxogramas a animação minha paixão contar histórias e ser
              capaz de despertar emoções nas pessoas através do que eu crio.
              Iniciei minha vida universitária bem longe de tudo isso cursando
              Engenharia de Computação no SENAI CIMATEC, porém muitos cálculos e
              físicas depois percebi que isso não era pra mim.
            </p>

            <p>
              Assim, troquei para Engenharia de Software na UCSAL para focar
              mais na área da tecnologia que realmento gosto. Além disso iniciei
              o curso de Digital Design na Infinity School para dominar melhor o
              pacote Adobe e me desafiar a criar vídeos, animações, fotos e
              ilustrações com cada vez mais qualidade.
            </p>

            <p>
              Apesar de não seguir com a carreira de engenheira ou
              desenvolvedora, acredito que ter estudado engenharia e programação
              me deu uma visão única como UI/UX designer, me possibilitou ter
              noção de tempo de produção, do que é ou não possível criar com
              código de acordo com cada situação.
            </p>
          </div>
        </div>

        <div className="section-3-pe">
          <p className="pink-2 ceter-text">Experiência profissional</p>

          <div className="info-container ">
            <p className="no-margin ">Ex-coordenadora de núcleo da CIMATECjr</p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin ">Atuei como estagiária no app CHAPP </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin">
              Atualmente atuo como estagiária na empresa Qualivida{" "}
            </p>
          </div>
        </div>

        <div className="section-4-pe">
          <p className="pink-2 ceter-text">Skills</p>
          <div className="info-container ">
            <p className="no-margin ">
              Tenho experência com HTML, CSS e Javascript, além de já ter
              desenvolvido utilizando as frameworks Angular e React (inclusive
              esse portifólio foi construido em React).
            </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin ">
              Para desenho de interfaces possuo experiência com o Figma (já
              desenhei um app completo no software).
            </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin">
              Na área de UX tenho conhecimento e prática em diversos processos,
              como desenho de personas, fluxos do usuário e testes de
              usabilidade.
            </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin">
              Possuo conhecimento em Photoshop, Illustrator, Premier e After
              Effects (edição de vídeo e animação são paixões minhas).
            </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin">
              Tenho familiridade com metodologias ágeis como o scrum, sou muito
              comunicativa e possuo muita vontade de aprender e me desenvolver.
            </p>
          </div>
          <br />
          <div className="info-container ">
            <p className="no-margin">
              Nível de Inglês intermediário a avançado.
            </p>
          </div>
        </div>

        <div className="section-5-pe">
          <p className="pink-2 ceter-text">Produções</p>
          <div className="info-container ">
            <p className="no-margin ">
              Separei 3 trabalhos meus onde procuro expor um pouco do meu
              processo de para contrução de elementos e fluxos de usuário
            </p>
            <br />
            <a href="/producoes" className="blue-2 no-margin">
              Ver produções
            </a>
          </div>
        </div>

        <div className="section-6-pe">
          <p className="pink-2 ceter-text">Contato</p>
          <div className="info-container ">
            <div className="s6-flex">
              <MailOutlineIcon className="icon" />
              <a className="side-icon-margin">beatriz.calazans26@gmail.com</a>
            </div>
          </div>
          <br />
          <div className="info-container ">
            <div className="s6-flex">
              <LinkedInIcon className="icon" />
              <a
                href="https://www.linkedin.com/in/beatriz-calazans/s"
                className="side-icon-margin "
              >
                www.linkedin.com/in/beatriz-calazans
              </a>
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    </>
  );
};
