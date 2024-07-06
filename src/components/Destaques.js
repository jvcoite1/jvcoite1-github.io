import React from "react";

const Destaques = () => {
  return(
    <div id="destaques">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <h1>Desenvolvedor Web</h1>
            <h3>Utilizo tecnologias de ponta para dar vida a projetos web</h3>

            <div className="botoes">
              <a href="#portfolio"><button>Veja meus projetos</button></a>
              <a href="./assets/pdf/Curriculo.pdf" target="_blank">Baixar currículo</a>
            </div>

            <div className="capa">
              <img className="img-center img-fluid" src="./assets/img/1.2.jpg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destaques