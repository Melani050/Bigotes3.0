import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardtrasparenteComponent} from "./components/cardtrasparente/cardtrasparente.component";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InicioRoutingModule } from './inicio-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CardtrasparenteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    InicioRoutingModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    // Hay que exportar el componente para que el inicio pueda utilizarlo
    CardsComponent,
    CardtrasparenteComponent,
    MatButtonToggleModule
  ]
})
export class InicioModule { }
