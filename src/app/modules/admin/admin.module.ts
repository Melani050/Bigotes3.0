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

// ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
