import React from "react";
import { useEffect } from "react";



const Navbar = () => {
  
  window.onload = () => {

    const temaEscuroBtn = document.getElementById('tema-escuro')

    // Função que altera entre tema claro e escuro
    const handleTema = () => {
      document.body.classList.toggle('dark')
    }
    
    // Event listener on change
    temaEscuroBtn.addEventListener('change', () => {

      handleTema()
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
  <nav className="navbar navbar-expand-lg">
  
    <div className="container">
  
      <a className="navbar-brand" href="#"><span style={{color: "#ffffff"}}>Logo aqui</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
  
      <div className="contato">
        <a href="">Entre em contato</a>
      </div>

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