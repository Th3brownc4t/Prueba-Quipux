import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink],
  template: `
    <app-menu class="Menu">
</app-menu>
<app-header Nombre="QUIPUX" class="cabecera">

</app-header>
<div class="row todo arriba gap-5">
  <div class="col-xxl-4 fondo-1">
    <h1 class="mt-4">INFROMACIÓN DE LA EMPRESA</h1>
      <div class="d-flex flex-column align-items-center text-center">
        <div class="mt-3">
          <h2>Nombre</h2>
          <p>Quipux S.A.S</p>
        </div>
        <div class="mt-3">
          <h2>Fecha de creación</h2>
          <p>1995/05/06</p>
        </div>
        <div class="mt-3">
          <h2>Dirección</h2>
          <p>Carrera 43A No. 3 Sur-130 <br>
          Ed. Milla de Oro <br>
          Distrito de negocios Torre 1 <br>
          Piso 12
          <p>Medellín - Colombia</p>
        </div>
        <h2 class="mt-3">Número de teléfonos</h2>
        <p class="mt-3">Fijo <br>
        +57 (4) 313-70-00 <br>
        Fax <br>
        +57 (4) 313-44-77 <br>
      </p>
      <div class="mt-3">
        <h2>Sitio web</h2>
        <p>www.quipux.com/site</p>
      </div>
    </div>
  </div>  
  <div class="col-xxl-7 fondo-2">
    <h1 class="mt-4">INFROMACIÓN DEL CONTACTO</h1>
    <div class="grid">
      <div class="row">
        <div class="col d-flex flex-column align-items-center text-center">
        <div class="separacion">
          <h2>Dirección</h2>
          <p class="lh-lg">Carrera 52 # 91-66 <br>
          Medellín Colombia</p>
        </div>
        <div class="separacion">
          <h2>Correo electrónico</h2>
          <p class="lh-lg">usuarioapellido&#64;hotmail.com</p>
        </div>
        <div class="separacion">
          <h2>Sitio Web</h2>
          <p class="lh-lg">www.usuarioapellido.com</p>
        </div>
        <div class="separacion">
          <h2>Red social</h2>
          <p class="lh-lg">www.instagram.com/usuarioapellido <br>
          www.linkeind.comm/usuarioapellido</p>
        </div>
          </div>
          <div class="linea separacion">

          </div>
          <div class="col d-flex flex-column align-items-center text-center">
            <div class="separacion">
              <h2>Dirección de correspondencia de correo</h2>
              <p class="lh-lg">Carrera 52 # 91-66 <br>
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
        </div>
    </div>
  </div>
  <img class="footer mx-auto" src="Assets/Images/logo-removebg-preview.png" alt="Logo">
</div>
  `,
  styles: `
  @media (width <=1440px) {
    h1{
      text-align: center;
    }
  }
  @media (width <=478px) {
    .linea{ 
  display: none;
}
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
  .fondo-1{
    background-color: white;
    height: 100%;
    padding: 0 1rem 4rem 1rem;
  }
  .fondo-2{
    background-color: white;
    height: 100%;
    padding: 0 1rem 3rem 1rem;
  }
.separacion{
  margin-top: 3.5rem;
}
.linea{
  padding: 0;
  width: 0;
  height: 550px;
  border: solid 1px #ccc; 
}
.todo{
    padding-top: 30px !important;
}
.footer{
    width: 200px;
    height: auto;
  }
  `
})
export class EmpresasComponent {

}
