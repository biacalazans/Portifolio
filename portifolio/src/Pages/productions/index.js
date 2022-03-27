import { Grid } from "@material-ui/core";
import React from "react";
import "./productions.css";
import ModalA from "../../assets/ModalA.svg";
import ModalB from "../../assets/ModalB.png";
import RatingA from "../../assets/ratingA.svg";
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
import Home1 from "../../assets/home1.svg";
import Home2 from "../../assets/home2.svg";
import SlideToConfirm from "../../assets/slideToConfirm.svg";
import Confirmed from "../../assets/confirmed.svg";
import Mockup from "../../assets/mockup.jpg";

export default function Productions() {
  return (
    <>
      <main>
        <div className="title-container">
          <p className="pink-1 black">Produções</p>
        </div>

        <br />

        <br />

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
                  O maior desafio dessas telas foi o fato de estar fazendo
                  apenas algumas partes do app e não ele todo, ou seja tinha que
                  seguir a estética já adotada para não tornar o app
                  inconsistente. Entretanto, apesar do desafio, essa experiência
                  em ensinou como trabalhar com os limites estabelecidos pela
                  empresa ou pela situação e como tirar o melhor disso.
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
          <div className="flexbox s3-space">
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

          {/* <br />
          <br />
          <br /> */}

          <div className="flexbox s3-space">
            <div>
              <p className="img-title">Protótipo de baixa fidelidade</p>
              <img className="s2-book" src={Book0} />
            </div>
            <div className="s2-text-container2">
              <p>
                Como foi um projeto de faculdade, tive que considerar
                primeiramente que seria desenvolvido rápido e por estudantes
                cansados, ou seja, não poderia ser muito elaborado. Então pensei
                em uma estética simples, usando preto e branco como cores
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

          <div className="flexbox s3-space">
            <div className="block">
              <p className="img-title">Processo da diagramação do livro</p>
              <img className="s2-book" src={Book1} />
              <img className="s2-book" src={Book2} />
              <img className="s2-book" src={Book3} />
            </div>
          </div>

          <div className="flexbox s3-space">
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
                      <strong>Problema:</strong> Não tínhamos tempo de aplicar
                      ao sistema o upload de imagens para os usuários escolherem
                      a imagem que ficaria como capa do livro.
                    </p>

                    <p>
                      <strong>Solução:</strong> Como as cores utilizadas foram
                      preto e branco, achei interessante trazer a ideia do
                      usuário escolher entre um grupo de cores pŕe definidas a
                      cor do livro que vai cadastrar. Assim escolhi seis cores
                      vivas para trazer um frescor ao design minimalista
                      desenhado.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
          {/* <br />
          <br />
          <br /> */}

          <div className="flexbox s3-space">
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
          <div className="flexbox s3-space">
            <img className="s3-mockup s3-img-mobile" src={Mockup} />
            <p className="s3-text-container1">
              {/* adicionar classe para margin bottom */}O App Quali foi
              idealizado como o “Uber da saúde domiciliar” uma ideia para
              solicitar servições de saúde em casa no modelo criando pela
              gigante dos tranporte. O conceito é simples, você compra o
              serviço, uma solicitação de atendimento é enviada para os
              profissionais habilitados cadastrados no app, quem aceitar
              primeiro fica com o atendimentos.
            </p>
          </div>

          <div className="flexbox s3-space">
            <p className="s3-text-container2">
              Esse foi um desafio gigante, minha primeira experiência fazendo
              desde a documentação do software a sua interface, desenhado fluxos
              e personas para dois aplicativos que funcionam como um, Quali
              Paciente e Quali Pro para os profissionais de saúde .
            </p>
            <div>
              <p className="img-title">Persona do App Quali</p>
              <img className="round-img s3-img-mobile" src={Persona} />
            </div>
          </div>

          <div className="flexbox s3-space">
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="s3-screenshot-container screenshot-container">
                  <p className="img-title">Home do cliente</p>
                  <img className="s3-screenshot" src={Home2} />
                  <img className="s3-screenshot" src={Home1} />
                </div>
              </Grid>

              <Grid className="s3-space" item xs={12} md={6}>
                <p className="s3-text-container3">
                  Ao lado estão (ou acima se você estiver vendo pelo celular) a
                  penúltima e a última versão da Home do Quali Paciente,
                  respectivamente.
                </p>
                <p className="s3-text-container3">
                  <strong>Problema:</strong> Diagramação dos serviços. As duas
                  telas possuem basicamente os mesmos componentes: pesquisa de
                  serviço, peça novamente e listagem de serviços, entretanto na
                  penúltima versão a interface acabou ficando muito carregada e
                  visualmente puluída. Além disso, não teriámos ilustrações
                  suficientes para todos os serviços.
                </p>

                <p className="s3-text-container3">
                  <strong>Resolução:</strong> Criação da navegação por
                  categoria, o que acredito ser muito necessário já que, na
                  maioria das vezes os clientes não sabem exatamente o que
                  precisam, assim trasnformei as imagens dos serviços nas das
                  categorias ao mesmo tempo que meu colega de equipe trouxe
                  imagens mais simples para os serviços, assim deixando a
                  interface mais clean e resolvendo o problema de falta de
                  ilustrações.
                </p>
              </Grid>
            </Grid>
          </div>

          <div className="flexbox s3-space">
            <p className="s3-text-container2">
              <strong>Aplicando storytelling</strong> ao fluxo de compra, para o
              cliente, e ao fluxo de aceitar um atendimento, para o
              profissional, adicionei um botão de “deslize para confirmar”
              seguido de uma tela de confirmação da ação realizada com o
              objetivo de trazer uma coclusão a jornada do usuário.
            </p>
            <img className="s3-img-mobile" src={Slide} />
          </div>

          <div className="block">
            <div className="flexbox">
              <p className="img-title">
                "Arraste para confirmar" aplicado ás interfaces
              </p>
            </div>
            <div className="flexbox screenshot-container">
              <img
                className="s3-screenshot2 s3-screenshot"
                src={SlideToConfirm}
              />
              <img className="s3-screenshot2 s3-screenshot" src={Confirmed} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
