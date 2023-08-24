import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './modules/pages/register/register.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    RegistroComponent,
    ProductosComponent,
    RegisterComponent,
    ButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
