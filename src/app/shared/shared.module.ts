import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "../app-routing.module";

//MATERIAL
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';


//COMPONENTES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    // DECLARAMOS COMPONENTES
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    // MATERIAL
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule

  ]
})
export class SharedModule { }
