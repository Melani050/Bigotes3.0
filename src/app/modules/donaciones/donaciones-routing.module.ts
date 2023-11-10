import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';

const routes: Routes = [
  {path: "donaciones",component: DonacionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
