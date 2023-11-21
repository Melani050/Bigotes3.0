import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    InicioRoutingModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    // Hay que exportar el componente para que el inicio pueda utilizarlo
    CardsComponent
  ]
})
export class InicioModule { }
