import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';

const routes: Routes = [
  {
    path:"mascotas",component:MascotasComponent
  },
  //  ESPECIES DE MASCOTAS-> RUTAS
  {
    path:"perros",component:PerrosComponent
  },
  {
    path:"gatos",component:GatosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
