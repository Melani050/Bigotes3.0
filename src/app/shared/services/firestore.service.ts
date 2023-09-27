import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from "@angular/fire/compat/firestore";
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
   //referencio la nueva coleccion en la base de datos
   private usuarioCollection: AngularFirestoreCollection<Usuario>

   constructor(private database:AngularFirestore){
    this.usuarioCollection = this.database.collection<Usuario>('usuarios');

   }
  agregarUsuario(usuario:Usuario,id: string){

    return new Promise(async(resolve, reject)=>{
      try{
        usuario.uid =id;

        const resultado = await this.usuarioCollection.doc(id).set(usuario);

        resolve(resultado)
      }catch(error){

        reject(error)
      }

    })

  }
}
