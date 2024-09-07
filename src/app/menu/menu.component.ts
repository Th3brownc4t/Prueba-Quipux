import { NgClass } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass, RouterLink,RouterLinkActive],
  template: `

  <!-- Sidebar lateral -->
    <div (mouseover)="toggleSegundary()" #Sidebar class="nav d-flex flex-column position-fixed p-4 h-100 z-5">
      <img class="icon" src="Assets/Images/Menu.svg" alt="">
      <img class="icon" src="Assets/Images/Shopp.svg" alt="">
      <img class="icon" src="Assets/Images/person.svg" alt="">
    </div>

    <!-- Sidebar visible -->
    <div (mouseleave)="toggleSegundary()" [ngClass]="{'sidebar-close': !isActive}" class="nav pt-4 px-3 d-flex flex-column position-fixed h-100 z-6">
      <div class="d-flex justify-content-between">
        <img class="iconos" src="Assets/Images/Menu.svg" alt="">
        <a routerLink="">
          <img  class="logo" src="Assets/Images/logo-removebg-preview.png" alt="">
        </a>
      </div>
      <h3 class="mt-5">ENTITIES</h3>
      <div class="linea"></div>
      <div class="d-flex justify-content-between">
        <div class="d-flex py-3 gap-2 align-items-center">
          <a class="d-flex align-items-center" routerLink="/empresas">
            <img class="iconos" src="Assets/Images/Shopp.svg" alt="">
            <h2>EMPRESAS</h2>
          </a>
        </div>
        <img class="iconos" src="Assets/Images/keyboard.svg" alt="">
      </div>
      <div class="d-flex py-3 justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <a class="d-flex align-items-center" routerLink="/articulos">
            <img class="iconos" src="Assets/Images/descripcion.svg" alt="">
            <h2>ARTICULOS</h2>
          </a>
        </div>
        <img class="iconos" src="Assets/Images/keyboard.svg" alt="">
      </div>
      <div class="d-flex py-3 justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <img class="iconos" src="Assets/Images/person.svg" alt="">
          <h2>COLABORADORES</h2>
        </div>
        <img class="iconos" src="Assets/Images/keyboard.svg" alt="">
      </div>
    </div>

  `,
  styles: `
    .unstyle {
    all: unset;
    }
  .nav{
    background-color: var(--primary-color);
  }
  h2{
    font-size: 14pt;
    margin-bottom: 0;
    color: white;
    font-family: 'Segundaria'
  }
  h3{
    font-size: 16pt;
    margin-bottom: 0;
    color: #7e7e7e;
    font-family: 'Segundaria'
  }
.icon{
    width: 35px;
    height: 10%;
    filter: invert(100%);
  }
.iconos{
    width: 35px;
    height: 100%;
    filter: invert(100%);
  }
.logo{
    width: 120px;
    height: auto;
    filter: invert(100%);
  }
  .linea{
    width: 100%;
    height: 1px;
    background-color:#7e7e7e; 
    margin-bottom: 1.5rem;
  }
  .sidebar-close{
    display: none !important;
  }
  `
})
export class MenuComponent {
  isActive = false;
  toggleSegundary() {
    this.isActive = !this.isActive;
    }
    
  }