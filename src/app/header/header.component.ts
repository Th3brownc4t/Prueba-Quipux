import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
      <div class="margen pt-3 d-flex justify-content-between pb-4">
        <div class="izquierdo d-flex align-items-center gap-4 my-auto">
          <a routerLink="">
            <img src="Assets/Images/home.svg" alt="">
          </a>
          <p>/</p>
          <a routerLink="/empresas">
            <p>EMPRESAS</p>
          </a>
          <p>/</p>
          <p>{{Nombre}}</p>
        </div>
        <div class="d-flex align-items-center me-5">
          <img class="user" src="Assets/Images/usuario.png" alt="User">
          <p class="my-auto">Usuario Apellido</p>
        </div>
      </div>
  `,
  styles: `
  @media (width <=1399px) {
    .cabecera{
      margin: 0 !important;
    }
    .cabecera .me-5{
      margin: 0 !important;
    }
  }
  .margen{
    padding-left: 110px;
  }
  .izquierdo p{
    margin-bottom: 0;
    color: #777777;
  }
  .izquierdo{
    font-size: 14pt;
    margin-bottom: 0;
    font-family: 'Segundaria';
    font-weight: 500;
  }
  .margen img{
    width: 42px;
    height: 42px;
  }
  .user{
    width: 50px;
    height: 50px;
  }
  `
})
export class HeaderComponent {
    @Input() Nombre: string=''.toUpperCase();
}
