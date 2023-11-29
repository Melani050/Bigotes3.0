import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { ApartadosComponent } from './components/apartados/apartados.component';

/** ANGULAR MATERIAL */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { InicioRoutingModule } from './inicio-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarouselComponent,
    ApartadosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    InicioRoutingModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    // Hay que exportar el componente para que el inicio pueda utilizarlo
    CardsComponent,
    CarouselComponent,
    ApartadosComponent
  ]
})
export class InicioModule { }
