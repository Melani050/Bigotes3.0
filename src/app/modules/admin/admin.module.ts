import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './components/table/table.component';

// VISTA
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }
