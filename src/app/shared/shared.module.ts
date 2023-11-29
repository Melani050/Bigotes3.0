import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "../app-routing.module";

//MATERIAL
<<<<<<< HEAD
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
=======
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';

import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatExpansionModule} from '@angular/material/expansion';

>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51


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
<<<<<<< HEAD
    //MATERIAL
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    NavbarComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent

=======
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatExpansionModule,
    MatMenuModule
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
  ]
})
export class SharedModule { }
