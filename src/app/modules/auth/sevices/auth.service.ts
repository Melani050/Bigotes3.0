import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {
  }
  registrar (email: string, contrasena: string){
    //retorna nueva informacion
    return this.auth.createUserWithEmailAndPassword(email, contrasena)
   }
}
