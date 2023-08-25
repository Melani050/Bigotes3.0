import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NosotrosComponent } from './modules/inicio/pages/nosotros/nosotros.component';



@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NosotrosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
