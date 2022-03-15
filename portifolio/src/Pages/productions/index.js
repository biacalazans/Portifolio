import { Grid } from "@material-ui/core";
import React from "react";
import "./productions.css";
import ModalA from "../../assets/ModalA.png";
import ModalB from "../../assets/ModalB.png";
import RatingA from "../../assets/ratingA.png";
import RatingB from "../../assets/ratingB.png";
import BJWire from "../../assets/bookjarWireframe.png";
import Book0 from "../../assets/frame0.png";
import Book1 from "../../assets/frame1.png";
import Book2 from "../../assets/frame2.png";
import Book3 from "../../assets/frame3.png";
import Perfil from "../../assets/perfil.png";

export default function Productions() {
  return (
    <>
      <main>
        <p className="pink-1 black">Produções</p>

        <section>
          <p className="pink-2">Remodelação das telas do app CHAPP</p>
          <p className="white-2">
            Todas as telas apresentadas foram implementadas no app. A esquerda
            antes e a direita depois, ou você estiver pelo celular a primeira
            antes e a seguda depois :)
          </p>

          <Grid container>
            <Grid item xs={12} md={7}>
              <div className="screenshot-container">
                <img className="s1-modalB" src={ModalB} />
                <img className="s1-modalA" src={ModalA} />
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="s1-text-container1">
                <p>
                  O chapp é um app de marcação de consultas onde eu estagiei
                  durante 6 meses, nesse tempo uma das minhas missões dentro da
                  empresa foi melhorar a interface que estava desatualizada
                  esteticamente além de ter uma péssima usabilidade.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="s1-text-container2">
                <p>
                  O maior desafio dessas telas foi o fato de eu estar fazendo
                  apenas algumas partes do app e não ele todo, ou seja tinha que
                  segui a estética para não deixar inconsistente. Entretanto,
                  essa experiência em ensinou com o trabalhar com os limites
                  estabelecidos pela empresa ou pela situação e como tirar o
                  melhor disso.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className="screenshot-container">
                <img className="s1-ratingB" src={RatingB} />
                <img className="s1-ratingA" src={RatingA} />
              </div>
            </Grid>
          </Grid>
        </section>
        <br />
        <br />
        <br />
        <section>
          <p className="pink-2">BookJar</p>
          <div className="flexbox">
            <div className="s2-text-container1">
              <p>
                O BookJar foi criado para a matéria Processos de Software do
                curso de Engenharia de Software da Ucsal. Esse sistema seria uma
                rede social de leitores, onde o usuário poderia cadastrar livros
                e exibi-los no seu perfil, com a possibilidade de pesquisar
                livros e ver o perfil de outros usuários.
              </p>
            </div>
            <div>
              <p className="s2-img-title">Wireframe BookJar</p>
              <img className="s2-wire" src={BJWire} />
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <div>
              <p className="s2-img-title">Protótipo de baixa fidelidade</p>
              <img src={Book0} />
            </div>
            <div className="s2-text-container2">
              <p>
                Como foi um trabalhgo de faculdade, tive que considerar
                primeiramente que seria desenvolvido rápido e por estudande
                cansados de madraguda, ou seja, nada muito elaborado. Então
                pensei em uma estética simples, usando preto e branco como cores
                primárias e usando tipopgrafia para trazer a atmosfera de
                leitura para a interface, pensando que a persona criada sentiria
                que o sistema é convidativo e moderno.
              </p>

              <p>
                A forma de exibição do livro é um dos elementos chave desse
                sistema, ao mesmo tempo que deveria ser simples e de fácil
                transformação para código, ele deve comportar a exibição de
                título, autor, edição, quando foi lido, avalição e comentário do
                usuário
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <div className="block">
              <p className="s2-img-title">
                Processo para criação da diagramação do livro
              </p>
              <img className="s2-book" src={Book1} />
              <img className="s2-book" src={Book2} />
              <img className="s2-book" src={Book3} />
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <div>
              <p className="s2-img-title">Escolha de cores</p>
              <div className="flexbox">
                <div className="s2-color-container">
                  <div className="s2-color1"></div>
                  <p>#0496FF</p>
                </div>

                <div className="s2-color-container">
                  <div className="s2-color2"></div>
                  <p>#FF3A20</p>
                </div>

                <div className="s2-color-container">
                  <div className="s2-color3"></div>
                  <p>#4DA167</p>
                </div>
              </div>

              <div className="flexbox">
                <div className="s2-color-container">
                  <div className="s2-color4"></div>
                  <p>#6A0136</p>
                </div>

                <div className="s2-color-container">
                  <div className="s2-color5"></div>
                  <p>#FDCA40</p>
                </div>

                <div className="s2-color-container">
                  <div className="s2-color6"></div>
                  <p>#F18F01</p>
                </div>
              </div>
            </div>

            <div>
              <p className="s2-text-container1">
                Como as cores utilizadas foram preto e branco, achei
                interessante trazer a ideia do usuário escolher a cor do livro
                que vai cadastrar, o que foi uma solução para a impossibilidade
                de fazer upload de imagens (não tinhamos o tempo para isso).
                Assim escolhi seis cores vivas para trazer um frescor ao design
                minimalista desenhado.
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <div className="block">
              <p className="s2-img-title">Versão final - perfil do usuário</p>
              <img src={Perfil} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
