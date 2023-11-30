import { Component } from '@angular/core';
import { AuthService } from "../sevices/auth.service";
import { FirestoreService } from "src/app/shared/services/firestore.service";
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario ={
    uid:'',
    nombre:'',
    rol:'',
    email:'',
    contrasena:'',
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}

  // función para iniciar sesión
  async iniciar() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }
  
    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res =>{
      alert("ha accedido con éxito");
      console.log(credenciales.email);

      this.router.navigate(['/inicio'])
    })
    .catch ((error: string) => {
      alert("Hubo un error al iniciar sesión :(  \n" + error);
      console.log(credenciales.email);
    } )
  }

  // función para cerrar sesión
  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Ha cerrado sesión con éxito.");
      console.log(res);

      this.router.navigate(['/inicio']);
    })
  }
}



