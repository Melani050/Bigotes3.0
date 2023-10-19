import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "../app-routing.module";

//MATERIAL
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";


//COMPONENTES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
