import React from 'react'
import { SiExpress, SiGit, SiBootstrap, SiJquery } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Tecnologias = () => {
  return (
    <div id="tecnologias">
      <div className="container">

        <div className="row">

          {/* PHP */}
          <div className="offset-md-1 col-md-2">
            <div className="tecnologia-container">
              <i className="lni lni-php"></i>
              <span className="tecnologia-titulo">PHP</span>
              <span className="tecnologia-descricao">Linguagem de programação server-side usada para desenvolvimento web.</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <i className="lni lni-javascript"></i>
              <span className="tecnologia-titulo">JavaScript</span>
              <span className="tecnologia-descricao">Forte conhecimento em JS e desenvolvimento avançado de web.</span>
            </div>
          </div>

          {/* React */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <i className="lni lni-react"></i>
              <span className="tecnologia-titulo">React</span>
              <span className="tecnologia-descricao">Construção de aplicações e sites rápidos com React.</span>
            </div>
          </div>
          
          {/* React Native */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <i className="lni lni-react"></i>
              <span className="tecnologia-titulo">React Native</span>
              <span className="tecnologia-descricao">Desenvolvimento de aplicações móveis nativas utilizando React.</span>
            </div>
          </div>
          
          {/* Node.js */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <i className="lni lni-nodejs-alt"></i>
              <span className="tecnologia-titulo">Node.js</span>
              <span className="tecnologia-descricao">Ambiente de execução JavaScript server-side para construir aplicações escaláveis.</span>
            </div>
          </div>

        </div>

        <div className="row">

          {/* Express */}
          <div className="offset-md-1 col-md-2">
            <div className="tecnologia-container">
              <SiExpress />
              <span className="tecnologia-titulo">Express</span>
              <span className="tecnologia-descricao">Framework web minimalista para Node.js, facilitando a criação de APIs robustas.</span>
            </div>
          </div>
         
          {/* MySQL */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <GrMysql />
              <span className="tecnologia-titulo">MySQL</span>
              <span className="tecnologia-descricao">Banco de dados relacional utilizado para armazenar e gerenciar dados de forma eficiente.</span>
            </div>
          </div>
          
          {/* Git */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <SiGit />
              <span className="tecnologia-titulo">Git</span>
              <span className="tecnologia-descricao">Ferramenta para gerenciamento de código-fonte.</span>
            </div>
          </div>
          
          {/* Bootstrap */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <SiBootstrap />
              <span className="tecnologia-titulo">Bootstrap</span>
              <span className="tecnologia-descricao">Framework front-end amplamente utilizado.</span>
            </div>
          </div>
         
          {/* jQuery */}
          <div className="col-md-2">
            <div className="tecnologia-container">
              <SiJquery />
              <span className="tecnologia-titulo">jQuery</span>
              <span className="tecnologia-descricao">Biblioteca JavaScript para simplificar interações HTML e manipulação do DOM.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tecnologias