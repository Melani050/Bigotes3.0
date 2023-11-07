import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// ARCHIVO DE RUTA
import { AdminRoutingModule } from './admin-routing.module';

// VISTA
import { AdminComponent } from './pages/admin/admin.component';

// COMPONENTE 
import { TableComponent } from './components/table/table.component';

// MATERIAL 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule
  ],
  exports: [
    TableComponent,
    MatIconModule
  ]
})
export class AdminModule { }
