import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { CardComponent } from './components/card/card.component';
import { CardPerrosComponent } from './components/card-perros/card-perros.component';
import { CardGatosComponent } from './components/card-gatos/card-gatos.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MascotasComponent,
    PerrosComponent,
    GatosComponent,
    CardComponent,
    CardPerrosComponent,
    CardGatosComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MascotasComponent,
    PerrosComponent,
    GatosComponent,
    CardComponent,
    CardPerrosComponent,
    CardGatosComponent
  ]
})
export class MascotasModule { }
