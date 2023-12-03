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
import { TableUsuarioComponent } from './components/table-usuario/table-usuario.component';
import { TableReportesComponent } from './components/table-reportes/table-reportes.component';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent,
    TableUsuarioComponent,
    TableReportesComponent
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
