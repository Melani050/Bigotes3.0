import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
=======

import { AppRoutingModule } from "../app-routing.module";

//MATERIAL
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";



//COMPONENTES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';




>>>>>>> 022fd585f4818e68b0033e6b0924d2333d6d0282

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
  // necesita las rutas
  //el único que importa el approuting es el shared por el navbar
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }



=======
    AppRoutingModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule


  ]
})
export class SharedModule { }
>>>>>>> 022fd585f4818e68b0033e6b0924d2333d6d0282
