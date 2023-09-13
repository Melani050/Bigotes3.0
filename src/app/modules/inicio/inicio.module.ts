import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InicioRoutingModule } from './inicio-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CardsComponent,
    InicioRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    CardsComponent
  ]
})
export class InicioModule { }
