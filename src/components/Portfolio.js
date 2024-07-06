import React from 'react'
import { useEffect } from 'react';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

const Portfolio = () => {

  const popup = () => {

    const modalImg = document.getElementById('modal-img')
    

    const overlays = document.querySelectorAll('.overlay')
    overlays.forEach((overlay) => {

      overlay.addEventListener('click', () => {
        const src = overlay.previousElementSibling.src
        modalImg.src = src
      })

    })
    

  }

  useEffect(() => {

    popup()
  }, [])




  return (
    <div id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <h2>Meus projetos</h2>


            <div id="carouselPortfolio" className="carousel slide">

              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselPortfolio" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselPortfolio" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselPortfolio" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>


              <div className="carousel-inner">

                <div className="carousel-item active">

                  <div className="row">
                    
                    {/* CONEA */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/conea-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">CONEA</span>
                        {/* <span className="descricao"><a href="https://conea.consid.ba.gov.br/" target='_blank'>https://conea.consid.ba.gov.br/</a></span> */}
                        <a className="botao" href="https://conea.consid.ba.gov.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                

                    {/* Comaflex */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/comaflex-full.jpg" alt=""  />
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Comaflex</span>
                        <a className="botao" href="https://comaflex.com.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Bicudo */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/bicudo-full.jpg" alt="" />
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">ABAPA - Campanha de combate ao bicudo</span>
                        <a className="botao" href="https://abapa.com.br/bicudo" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Sistema Município Transparente */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/mtransparente-full.jpg" alt="" />
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Sistema Município Transparente</span>
                        <a className="botao" href="https://site.mtransparente.com.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                  </div>


                </div>

                <div className="carousel-item">

                  <div className="row">
                    
                    {/* Edith Melo Advocacia */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/edith-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Edith Melo Advocacia</span>
                        <a className="botao" href="https://edithmeloadvocacia.com.br/landing" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Secretaria Municipal de Cultura e Esportes de Luís Eduardo Magalhães */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/esportecultura-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Secretaria Municipal de Cultura e Esportes de Luís Eduardo Magalhães</span>
                        <a className="botao" href="https://esportecultura.pmlem.ba.gov.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Portal de Ofertas */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/portaldeoferta-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Portal de Ofertas</span>
                        <a className="botao" href="https://portaldeoferta.com.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Casa do Marceneiro */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/casadomarceneiro-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Casa do Marceneiro</span>
                        <a className="botao" href="https://casadomarceneiroba.com.br/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                  </div>

                  
                  
                </div>
                
                <div className="carousel-item">
                  
                  
                  <div className="row">
                    
                    {/* COTE Locações */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/cotelocacoes-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">COTE Locações</span>
                        <a className="botao" href="https://cotelocacoes.com/" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Oeste Pecuária */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/oestepecuaria-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Oeste Pecuária</span>
                        <a className="botao" href="https://oestepecuaria.com.br/beta" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Jornal Nova Fronteira */}
                    <div className="col-md-3">

                      <div className="portfolio-container">
                        <div className="capa">
                          <img className='img-fluid img-center' src="./assets/img/portfolio/novafronteira-full.jpg" alt="" data-bs-toggle="modal"/>
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Jornal Nova Fronteira</span>
                        <a className="botao" href="https://jornalnovafronteira.com.br" target='_blank'>
                          <button>Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                    
                    {/* Produtos da Roça */}
                    <div className="col-md-3">

                      <div className="portfolio-container" >
                        <div className="capa">
                          <img className="img-fluid img-center" src="./assets/img/portfolio/produtosdaroca-full.jpg" alt="produtosdaroca" />
                          <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lupa" ><HiMagnifyingGlassPlus/></span>
                          </div>
                        </div>
                        <span className="titulo">Produtos da Roça</span>
                        <a className="botao" target='_blank'>
                          <button id="inativo">Ir para o site</button>
                        </a>
                      </div>

                    </div>
                    
                  </div>
                  


                </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselPortfolio" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselPortfolio" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="" alt="" className='img-fluid' id="modal-img" />
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>


      
    </div>

  )
}

export default Portfolio