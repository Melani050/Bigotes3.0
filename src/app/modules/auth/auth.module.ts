import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-ruting.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'

//SERVICIOS
import { AuthService } from './sevices/auth.service';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports:[
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  providers:[AuthService]//proverdor -->servicio
})
export class AuthModule { }
