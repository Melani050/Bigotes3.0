import { Component } from '@angular/core';
import { AuthService } from '../sevices/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input de contraseña

  //importacion del modelo
  usuarios: Usuario = {
      uid: '',
      nombre: '',
      email: '',
      rol: '',
      contrasena: '',
    
  }

  uid= '';

  coleccionUsuarios: Usuario[] = [];// CREAMOS NUEVA COLECCION PARA USUARIOS
  
  //definimos de forma publica el servicioAuth, servicioFirestore Y router
  constructor (
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
  ){}
       
  /*toma nuevo registro y muestra los resultados
    async = ASINCRONICO*/
  async registrarse(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
      
    //metdo THEN devuelve misma promesa
    .then(res=>{
      alert("Ha agregado un nuevo usuario con éxito:) ")
      
      this.router.navigate(["/inicio"]);// nueva ruta -> nos redirigimos
    })  

    //metodo CATCH creara un error en caso de que algo salga mal
    .catch(error => 
      alert("Hubo un error al crear el usuario :(  \n" + error)
    );

    //creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();
      
    //referenciamos el uid nuevo con el de usuario
    this.usuarios.uid = uid;

    //llamamos funcion guardarUser
    this.guardaUser();
  }
  //funcion asincronica para guardar usuarios  -> que agrega un nuevo usuario 
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
}
