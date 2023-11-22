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
import { BuscadorComponent } from './components/buscador/buscador.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CardtrasparenteComponent,
    BuscadorComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    InicioRoutingModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule
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
