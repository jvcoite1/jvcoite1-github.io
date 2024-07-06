import React from 'react'

const Sobre = () => {
  return (
    <div id="sobre">
      <div className="container">

        <div className="row">

          <div className="col-md-12">

            <h2>Solucionador de Problemas</h2>
            {/* <h6>Desenvolvedor Web com mais de 1 ano e 3 meses de experiência</h6> */}

          </div>

        </div>

        <div className="row">

          <div className="col-md-12">

            {/* Graduação */}
            <div className="descricao-container">

              <span className="descricao-titulo"><i className="lni lni-graduation"></i> Graduando em Ciência da Computação</span>

              <span className="descricao-subtitulo">Atualmente cursando Ciência da Computação.</span>

            </div>
            
            {/* Tecnologias */}
            <div className="descricao-container">

              <span className="descricao-titulo"><i className="lni lni-code"></i> Aprendendo Novas Tecnologias</span>

              <span className="descricao-subtitulo">Constantemente expandindo meu conhecimento em novas tecnologias e seguindo as tendências do setor.</span>

            </div>
            
            {/* Trabalho em equipe */}
            <div className="descricao-container">

              <span className="descricao-titulo"><i className="fa fa-handshake-o"></i> Adoro trabalhar em equipe</span>

              <span className="descricao-subtitulo">Gosto de trabalhar em um ambiente de equipe, mas também posso trabalhar de forma independente.</span>

            </div>

          </div>

          {/* <div className="col-md-6">
            <img src="" alt="Foto aqui" />
          </div> */}
        </div>

      </div>
    </div>
    
  )
}

export default Sobre