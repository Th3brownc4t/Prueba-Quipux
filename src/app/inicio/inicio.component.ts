import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink],
  template: `
  <app-menu class="Menu">
</app-menu>
      <section class="d-flex justify-content-between pt-3 mb-3 inicio cabecera">
        <a routerLink="/">
        <img class="logo ms-2" src="Assets/Images/logo.png" alt="logo">
          </a>
        <div class="d-flex align-items-center me-5">
          <img class="user" src="Assets/Images/usuario.png" alt="User">
          <p class="my-auto">Usuario Apellido</p>
        </div>
      </section>
  <main class="todo">
    <div class="row m-0 d-flex justify-content-between flex-wrap align-items-end contenedor">
    <section class="col-xxl-6">
      <h1>¿Qué quieres buscar?</h1>
      <p>Encuentra la información que desees consultar ...</p>
      <div class="d-flex borde">
        <button class="unstyle servicios">Todos los servicios
          <img class="ps-2 " src="Assets/Images/arrow.svg" alt="Flecha">
        </button>
        <input type="text" class="unstyle ms-4 buscador" placeholder="Que servicio quieres consultar">
        <li class="unstyle lupa d-flex justify-content-center align-items-center"><img src="Assets/Images/Search.svg"
            alt="Buscar"></li>
      </div>
      <section class="d-flex flex-wrap px-5 gap-5 fondito">
        <div class="recomendaciones d-flex flex-column align-items-start">
          <h2>Certificado</h2>
          <p>conoce los beneficios que tenemos para ti al registrarte</p>
          <button class="unstyle ver-mas rounded px-4 ">+beneficios</button>
        </div>
        <div class="recomendaciones d-flex flex-column align-items-start">
          <h2>Crear Cuenta</h2>
          <p>conoce los beneficios que tenemos para ti al registrarte</p>
          <button class="unstyle ver-mas rounded px-4 ">Ver todo</button>
        </div>
        <div class="recomendaciones d-flex flex-column h-100 align-items-start">
          <h2>Top trámites</h2>
          <p>Conoce los trámites más solicitados.</p>
          <button class="unstyle ver-mas rounded px-4 mt-4">Ver todo</button>
        </div>
      </section>
    </section>
    <section class="col-xxl-5 align-items-center ">
      <div class="d-flex justify-content-center">
        <img class="persona" src="Assets/Images/resource-1.png" alt="">
        <div class="p-3 position-absolute translucido z-4">
          <h3 class="text-center">SERVICIOS QUIPUX</h3>
        </div>
      </div>
      <div class="tramites">
        <h2 class="px-5 pt-5">Trámites en tu mano</h2>
        <p class="px-5">Ahora prodrás hacer todos tus trámites desde la comodidad de tu casa, desde cualquier dispositivo
          computadora, tablet o movil.</p>
        <div class="pb-5 barra d-flex align-items-center gap-3">
          <div class="d-flex align-items-center ">
            <p class="ps-5 opacity-25 mb-0">
              &#60;
            </p>
            <div class="letras">
              <p class="numero">1</p>
              <li class="unstyle opacity-25 frac"></li>
              <p class="ms-3 mb-0 opacity-25">4</p>
            </div>
            <p class="opacity-25 mb-0">
              &#62;
            </p>
          </div>
          <div class="linea rounded-pill">
            <div class="progreso linea rounded-pill"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <img class="d-flex justify-content-center mx-auto margen" src="Assets/Images/logo-removebg-preview.png" alt="Logo">
</main>
  `,
  styles: `
  @media (width <=1399px) {
    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .recomendaciones {
        width: 75% !important;
    }

    h2, h3, button {
        margin: 0 auto !important;
    }
    .col-xxl-5{
        justify-content: center;
        align-items: center;
    }
    .col-xxl-5{
        justify-content: center;
        align-items: center;
    }
    .persona{
        width: 300px !important;
    }
    .linea {
        width: 100px;
        height: 6px;
        background-color: #10a1e950;
    }
    .translucido {
        margin-top: calc(6rem + 1vw) !important;
    }
    .lupa{
      width
    }
    .borde{
      margin-bottom: 2rem !important;
    }
    .buscador {
    width: 50% !important;
}
    .barra{
      flex-direction: column;
    }
    .barra p{
      padding: 0 !important;
    }
    .frac{
      transform: rotate(-60deg) translate(6px, -2px) !important;
    }
    .letras{
      letter-spacing: 4px !important;
    }
    .servicios{
      /* margin: 0 !important; */
    }
    .cabecera{
      margin: 0 !important;
    }
    .cabecera .me-5{
      margin: 0 !important;
    }
}
  h1 {
    color: var(--secondary-color);
    font-size: 45pt;
    font-weight: bold;
    margin-left: 2rem;
}

h2 {
    font-size: 18pt;
    font-weight: bold;
    color: var(--third-color);
}

h3 {
    font-size: calc(2rem + 1vw);;
    color: var(--third-color);
    font-weight: bold;
    font-family: "Segundaria";
}
  .unstyle {
    all: unset;
}

.servicios {
    padding: 0.6rem 1.5rem 0.6rem 0.8rem;
    border-right: solid 2px var(--secondary-color);
    color: var(--third-color);
    font-weight: bold;
    background-color: #10a1e92c;
}

.footer {
    width: 200px;
}

.buscador {
    width: 58%;
}

.lupa {
    background-color: var(--secondary-color);
    width: 10%;
    height: auto;
}

.lupa img {
    width: 36px;
    height: 36px;
}

.borde {
    border: solid 2px var(--secondary-color);
    border-radius: 5px;
    max-width: 700px;
    width: auto;
    margin-bottom: 6rem;
}

.ver-mas {
    border: solid 2px var(--accent-color);
    color: var(--accent-color);
}

.recomendaciones {
    width: 25%;
}

.persona {
    width: auto;
    max-width: 500px;
    height: auto;
}

.translucido {
    background-color: #ffffffa2;
    backdrop-filter: blur(10px);
    margin-top: 15rem;
    max-width: 650px;
    width: auto;
}

.tramites {
    background-color: white;
    border-left: solid 4px var(--third-color);
    box-shadow: 2px 2px 6px;
    width: auto;
    max-width:
}

.fondito {
    background-color: white;
    padding: 2rem;
    box-shadow: 2px 2px 6px;
}

.linea {
    width: 250px;
    height: 6px;
    background-color: #10a1e950;
}
.progreso {
    width: 20%;
    height: 6px;
    background-color: var(--secondary-color);
}

.letras {
    letter-spacing: -5px;
    line-height: 0;
    font-size: 14pt;
    font-family: "Segundaria";
}

.frac {
    display: flex;
    width: 30px;
    height: 2px;
    background-color: black;
    transform: rotate(-60deg) translate(6px, -6px);
}

.numero {
    color: var(--secondary-color);
}

.contenedor {
    margin-bottom: 5rem;
}
.margen{
    margin-top: 4rem;
}
.inicio{
  margin-left: 110px;
}
.logo{
  width: 200px;
  height: 100%;
}
  .user{
    width: 50px;
    height: 50px;
  }
  p{
    font-weight: bold;
    font-size: 14pt;
  }
  `
})
export class InicioComponent {

}
