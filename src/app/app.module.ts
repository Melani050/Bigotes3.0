import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//FIREBASE
//Nos conectamos con la base de datos que trae los modulos necesarios
import { environment } from "src/environments/enviroment";
import { AngularFireModule } from "@angular/fire/compat";
//FIRESTORE
import { AngularFireAuthModule } from "@angular/fire/compat/auth";//AUTENTIFICACION
import { AngularFireStorageModule } from "@angular/fire/compat/storage";


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,



  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
