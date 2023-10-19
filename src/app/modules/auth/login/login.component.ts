import { Component } from '@angular/core';
import { AuthService } from "../sevices/auth.service";
import { FirestoreService } from "src/app/shared/services/firestore.service";
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide=true;

  Usuarios : Usuario={
    uid:'',
    nombre:'',
    email:'',
    rol:'',
    contrasena:''
  }

  constructor(
    public servicioAuth:AuthService,
    public servicioFirestore:FirestoreService,
    public router:Router
  ){}

  async iniciar(){
    const credenciales={
      email:this.Usuarios.email,
      contrasena:this.Usuarios.contrasena
    };

    const res=await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res => {
      alert("accedio con exito");
      console.log(credenciales.email);

      this.router.navigate(['/inicio'])
    })
    .catch(error => {
      alert("ocurrio un error al intentar iniciar sesion\n"+error)
      console.log(credenciales.email);
    })
  }

}
