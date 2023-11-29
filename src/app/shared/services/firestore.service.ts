import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Usuario } from "src/app/models/usuario";

=======
import { AngularFirestore, AngularFirestoreCollection  } from "@angular/fire/compat/firestore";
import { Usuario } from 'src/app/models/usuario';
>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
<<<<<<< HEAD
  //referenciamos la coleccion en la base de datos
  private usuarioCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuarioCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario:Usuario,id: string){
    //RESOLVE ->resuelto (similar a then)
    //REJECT ->rechazo (similar a catch)
    return new Promise(async(resolve, reject)=>{
      //hace una CAPTURA DE LOS DATOS -> similar al screenshot
=======
   //referencio la nueva coleccion en la base de datos
   private usuarioCollection: AngularFirestoreCollection<Usuario>

   constructor(private database:AngularFirestore){
    this.usuarioCollection = this.database.collection<Usuario>('usuarios');

   }
  agregarUsuario(usuario:Usuario,id: string){

    return new Promise(async(resolve, reject)=>{
>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
      try{
        usuario.uid =id;

        const resultado = await this.usuarioCollection.doc(id).set(usuario);

        resolve(resultado)
      }catch(error){
<<<<<<< HEAD
        //retornara el  error
=======

>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
        reject(error)
      }

    })

  }
<<<<<<< HEAD
}
=======
}
>>>>>>> cf497f73864fd7abfbfee10922af5b72fcc39f51
