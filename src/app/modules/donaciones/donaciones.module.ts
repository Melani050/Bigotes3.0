import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';



@NgModule({
  declarations: [DonacionesComponent],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
  ],
  exports:[
    DonacionesComponent,
  ]
})
export class DonacionesModule { 
  
}