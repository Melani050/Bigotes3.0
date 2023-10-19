import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referencia Autentificacion

  constructor(public auth: AngularFireAuth) {
   }

  //funcion para el inicio de sesion
  iniciarSesion(email:string, contrasena:string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
}

  cerrarSesion(){
    //devuelve una promesa vacia
    return this.auth.signOut();
  }
}