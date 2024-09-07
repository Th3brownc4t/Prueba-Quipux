import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink],
  template: `
  <app-menu class="Menu">
</app-menu>
<app-header Nombre="ARTICULOS" class="cabecera">

</app-header>
  <div class="row todo">
    <div class="col-xxl-4  d-flex flex-column align-items-center text-center fondo-1">
      <h1 class="mt-4">INFROMACIÓN DEL CONTACTO</h1>
    <div class="separacion">
          <h2>Dirección</h2>
          <p>Carrera 52 # 91-66 <br>
          Medellín Colombia</p>
        </div>
        <div class="separacion">
          <h2>Correo electrónico</h2>
          <p>usuarioapellido&#64;hotmail.com</p>
        </div>
        <div class="separacion">
          <h2>Sitio Web</h2>
          <p>www.usuarioapellido.com</p>
        </div>
        <div class="separacion">
          <h2>Red social</h2>
          <p>www.instagram.com/usuarioapellido <br>
          www.linkeind.comm/usuarioapellido</p>
        </div>
        <div class="separacion">
          <h2>Dirección de correspondencia de correo</h2>
          <p>Carrera 52 # 91-66 <br>
          Envigado Colombia</p>
        </div>
        <div class="separacion">
              <h2>Número de teléfonos</h2>
              <p class="lh-lg">Fijo <br>
              +57 (4) 313-70-00 <br>
              Celular <br>
              (312) 313-44-77</p>
            </div>
    </div>
    <div class="fondo-1 col mx-4 d-flex justify-content-start align-items-center flex-column">
      <div class="d-flex flex-column tamano mb-5 align-items-center justify-content-center">
        <div class="d-flex ajuste align-items-center justify-content-center">
          <img class="arrow" src="Assets/Images/arrow-back.svg" alt="image">
          <img class="image d-flex align-items-start" src="Assets/Images/image.svg" alt="image">
          <img class="arrow" src="Assets/Images/arrow-foward.svg" alt="image">
        </div>
        <div class="d-flex gap-3">
          <div class="circulo rounded-circle"></div>
          <div class="circulo rounded-circle"></div>
          <div class="circulo rounded-circle"></div>
          <div class="circulo rounded-circle"></div>
        </div>
      </div>
      <div class="d-flex responsivo ">
        <div class="d-flex align-items-center flex-column text-center">
          <div class="articulo"></div>
          <h2>Nombre Articulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus iste quas ipsa, aspernatur beatae!</p>
        </div>
        <div class="d-flex align-items-center flex-column text-center">
          <div class="articulo"></div>
          <h2>Nombre Articulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus iste quas ipsa, aspernatur beatae!</p>
        </div>
        <div class="d-flex align-items-center flex-column text-center">
          <div class="articulo"></div>
          <h2>Nombre Articulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus iste quas ipsa, aspernatur beatae!</p>
        </div>
        <div class="d-flex align-items-center flex-column text-center">
          <div class="articulo"></div>
          <h2>Nombre Articulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus iste quas ipsa, aspernatur beatae!</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: `
  @media (width <=768px) {
    .responsivo{
      flex-direction: column !important;
    }
  }
  .fondo-1{
    background-color: white;
    padding: 0 1rem 4rem 1rem;
  }
  h2{
    font-size: 14pt;
    margin-bottom: 0 ;
    font-weight: bold;
  }
  h1{
    font-size: 18pt;
    font-weight: bold;
  }
  .circulo{
    width: 16px;
    background-color: black;
    height: 16px;
  }
  .articulo{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: solid 1px black; 
  }
.separacion{
  margin-top: 1.5rem;
}
.tamano{
  height: 55%;
  width: 100%;
}
.ajuste{
  width: 65%;
  height: auto;
}
.image{
  width: 70%;
}
.arrow{
  width: 30px;
}
.todo{
    padding-top: 30px !important;
}
  `
})
export class ArticulosComponent {

}
