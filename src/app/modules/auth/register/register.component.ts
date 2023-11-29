import { Component } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../sevices/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
=======
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";
import { AuthService } from '../sevices/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';



>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
<<<<<<< HEAD
    hide = true; //input de contraseña

    //definimos de forma publica el servicioAuth
    constructor (
      public servicioAuth: AuthService,
      public servicioFirestore: FirestoreService,
      public router: Router


      ){}
       
    //importacion del modulo
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      email: '',
      rol: '',
      contrasena: ''
    
    }
     uid= '';
     coleccionUsuarios: Usuario[] = [];
  

    //tomando nuevo registro
    // async = ASINCRONICO
   async registrarse(){
    const credenciales ={
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };
    const res = await this.servicioAuth.registrar(credenciales.email,credenciales.contrasena)
    //metdo THEN devuelve misma promesa
    .then(res=>{
      alert("Ha agregado un nuevo usuario con exito:) ")

      this.router.navigate(["/inicio"]);
    })

    //metodo CATCH creara un error en caso de que algo salga mal
    .catch(error => 
      alert("Hubo un error al crear el usuario :(  \n" + error)
      )
    //creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();
    
    //referenciamos el uid nuevo con el de usuario
    this.usuarios.uid = uid;

    //llamamos funcion guardarUser
    this.guardaUser();
  }

  //funcion asincronica para guardar usuarios 
  async guardaUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);
    })
  }

  async ngOninit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
  
=======
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
>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
}
