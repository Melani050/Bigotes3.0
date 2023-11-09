import { Component } from '@angular/core';
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";
import { AuthService } from '../sevices/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide= true;// imput de contraseña.
  constructor(
    public servicioAuth:AuthService,
    public servicioFirestore:FirestoreService,
    public router: Router

  ){

  }
  usuarios:Usuario={
    uid:'',
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
      this.router.navigate(["/inicio"])

    })
    .catch(error =>
      alert("Hubo un error creando al usuario /n" + error));

    const uid= await this.servicioAuth.getUid();
    this.usuarios.uid=uid;
    this.guardaUser();

  }
  async guardaUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res=>{
      console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error =>', error);
    })
  }
  async ngOnInit(){
    const uid =await this.servicioAuth.getUid();
    console.log(uid);
  }
}
