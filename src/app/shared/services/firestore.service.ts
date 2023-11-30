import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Usuario } from "src/app/models/usuario";


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
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
      //referencio la nueva coleccion en la base de datos
        try{
          usuario.uid =id;
          const resultado = await this.usuarioCollection.doc(id).set(usuario);
          resolve(resultado)
        }catch(error){
          //retornara el  error
          reject(error)
        }
      })

    }
}
