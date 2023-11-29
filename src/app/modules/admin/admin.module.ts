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
import { MatTabsModule } from '@angular/material/tabs';

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
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    TableComponent,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
