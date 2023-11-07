import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { ApartadosComponent } from './components/apartados/apartados.component';

/** ANGULAR MATERIAL */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { MatTreeModule} from '@angular/material/tree';


import { InicioRoutingModule } from './inicio-routing.module';
import { MatGridList } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    ApartadosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    InicioRoutingModule,
    MatIconModule,
    MatTreeModule, 
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    // Hay que exportar el componente para que el inicio pueda utilizarlo
    CardsComponent,
    ApartadosComponent
  ]
})
export class InicioModule { }
