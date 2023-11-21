import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { CardComponent } from './components/card/card.component';
import { CardPerrosComponent } from './components/card-perros/card-perros.component';
import { CardGatosComponent } from './components/card-gatos/card-gatos.component';


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
  ],
  exports:[
    MascotasComponent,
    PerrosComponent,
    GatosComponent
  ]
})
export class MascotasModule { }
