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
import Screenshot from "../../assets/screenshot.png";
import Slide from "../../assets/slidePaper.png";
import Persona from "../../assets/persona.png";
import Home1 from "../../assets/home1.png";
import Home2 from "../../assets/home2.png";
import SlideToConfirm from "../../assets/slideToConfirm.png";
import Confirmed from "../../assets/confirmed.png";
import Mockup from "../../assets/mockup.jpg";

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
              <p className="img-title">Wireframe BookJar</p>
              <img className="s2-wire" src={BJWire} />
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <div>
              <p className="img-title">Protótipo de baixa fidelidade</p>
              <img className="s2-book" src={Book0} />
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
              <p className="img-title">
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
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <p className="img-title s2-margin">Escolha de cores</p>
                <div className="flexbox-color">
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

                <div className="flexbox-color">
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
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container justify="center">
                  <div className="s2-text-container1">
                    <p>
                      Como as cores utilizadas foram preto e branco, achei
                      interessante trazer a ideia do usuário escolher a cor do
                      livro que vai cadastrar, o que foi uma solução para a
                      impossibilidade de fazer upload de imagens (não tinhamos o
                      tempo para isso). Assim escolhi seis cores vivas para
                      trazer um frescor ao design minimalista desenhado.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />

          <div className="flexbox">
            <div className="block">
              <p className="img-title">Versão final - perfil do usuário</p>
              <img className="s2-profile-img round-img" src={Perfil} />
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />

        <section>
          <p className="pink-2">Quali e QualiPro</p>
          <div className="flexbox">
            <img className="s3-mockup" src={Mockup} />
            <p className="s3-text-container1">
              O App Quali foi idealizado como o “Uber da saúde domiciliar” uma
              ideia para solicitar servições de saúde em casa no modelo criando
              pela gigante dos tranporte. O conceito é simples, você compra o
              serviço, uma solicitação de atendimento é enviada para os
              profissionais habilitados cadastrados no app, quem aceitar
              primeiro fica com o atendimentos.
            </p>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <p className="s3-text-container2">
              Esse foi um desafio gigante, minha primeira experiência fazendo
              desde a documentação do software a sua interface, desenhado fluxos
              e personas para dois aplicativos que funcionam como um, Domy para
              os clientes e DomyPro para profissionais de saúde .
            </p>
            <div>
              <p className="img-title">Persona do App Quali</p>
              <img className="round-img" src={Persona} />
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flexbox">
            <p>Home do cliente</p>
            <img src={Home1} />
            <img src={Home2} />
            <div>
              <p className="s3-text-container3">
                Ao lado estão a penúltima e a última versão da Home do Domy,
                respectivamente.
              </p>
              <p className="s3-text-container3">
                Problema: Diagramação dos serviços. As duas telas possuem
                basicamente os mesmos componentes: pesquisa de serviço, peça
                novamente e listagem de serviços, entretanto na penúltima versão
                a interface acabou ficando muito carregada pelas imagens e
                diagramação. Além disso, não teriámos ilustrações suficientes
                para todos os serviços.
              </p>

              <p className="s3-text-container3">
                Resolução: Criação da navegação por categoria, o que acredito
                ser muito necessário já que, na maioria das vezes os clientes
                não sabeme exatamente o que precisam, assim trasnformei as
                imagens dos serviços nas das categorias, meu colega de equipe
                trouxe imagens mais simples para os serviços, assim deixando a
                interface mais clean e resolvendo o problema de falta de
                ilustações.
              </p>
            </div>
          </div>

          <div className="flexbox">
            <p>
              Aplicando storytelling ao fluxo de compra para o cliente, e ao
              fluxo de aceitar um atendimento para o profissional, com o
              objetivo de trazer uma coclusão a jornada do usuário, adicionei um
              botão de “deslize para confirmar” seguindo de uma tela de
              confirmação da ação realizada.
            </p>
            <img src={Slide} />
          </div>

          <div className="flexbox">
            <p lassName="img-title">
              "Arraste para confirmar" aplicado ás interfaces
            </p>
            <img src={SlideToConfirm} />
            <img src={Confirmed} />
          </div>
        </section>
      </main>
    </>
  );
}
