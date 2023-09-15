import { Component } from '@angular/core';
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";
import { AuthService } from '../sevices/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide= true;// imput de contraseña.
  constructor(
    public servicioAuth:AuthService,
    public router: Router

  ){

  }
  usuarios:Usuario={
    nombre:'',
    email:'',
    contrasena:'',
    confirmar:''


  }
  uid='';
  CollectionUsuarios:Usuario[]=[];
  async registrarse(){
    const credenciales ={
      email: this.usuarios.
      email,
      contrasena: this.usuarios.contrasena

    };
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    .then(res =>{
      alert("¡Ha agregado un nuevo usuario con exito!")

    })

  }

}
