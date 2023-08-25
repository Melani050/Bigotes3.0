import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
