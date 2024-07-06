import React from "react";


const Navbar = () => {

  const logo = () => {
    if(document.body.classList.contains('dark')) {
      document.getElementById('logo').src = './assets/img/logo-novo-branco.png'
    } else {
      document.getElementById('logo').src = './assets/img/logo-novo-preto.png'
    }
  }

  const hamburger = () => {
    if(document.body.classList.contains('dark')) {
      document.getElementById('navbar').classList.remove('navbar-light') 
      document.getElementById('navbar').classList.add('navbar-dark') 
    } else {
      document.getElementById('navbar').classList.remove('navbar-dark') 
      document.getElementById('navbar').classList.add('navbar-light') 
    }
  }
  
  
  window.onload = () => {
    
    logo()

    hamburger()

    const temaEscuroBtn = document.getElementById('tema-escuro')

    // Função que altera entre tema claro e escuro
    const handleTema = () => {
      document.body.classList.toggle('dark')
    }
    
    // Event listener on change
    temaEscuroBtn.addEventListener('change', () => {

      
      handleTema()
      logo()
      hamburger()
      console.log('mudou')

      // Remove o 'dark' do local storage
      localStorage.removeItem('dark')
      
      // Adiciona o 'dark' ao local storage
      if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
      }

    })



  }

  return(

<div id="topo">
  <nav className="navbar navbar-expand-lg" id="navbar">
  
    <div className="container">
  
      <a className="navbar-brand" href="/">

        {/* {document.body.classList.contains('dark') ? <> <img src="./assets/img/logo-preto.png" alt="" className="img-fluid" /> </> : <> <img src="./assets/img/logo-branco.png" alt="" className="img-fluid" /> </> }  */}
        <img src="./assets/img/logo-preto.png" alt="" className="img-fluid" id="logo" />

      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://wa.me/5577999337186" target="_blank">Contato</a>
          </li>
        </ul>
      </div>
  
        <a className="contato" href="https://wa.me/5577999337186" target="_blank">Entre em contato</a>

      <div className="claro-escuro">
        <input type="checkbox" name="tema-escuro" id="tema-escuro" />
        <label htmlFor="tema-escuro">
          <i className="bi bi-sun"></i>
          <i className="bi bi-moon"></i>
        </label>
      </div>
  
  
  
    </div>
  
  </nav>
</div>

  )
}



export default Navbar