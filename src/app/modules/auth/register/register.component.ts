import { Component } from '@angular/core';
import { Usuario } from "src/app/models/usuario";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide= true;// imput de contraseña.
  usuarios:Usuario={
    nombre:'',
    email:'',
    contraseña:'',
    confirmar:''


  }
  async registrarse(){

  }

}
