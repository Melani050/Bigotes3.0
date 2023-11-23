import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; // mapea valores -> similar a la función de un arreglo
import { Mascota } from 'src/app/models/mascotas';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  private mascotasCollection: AngularFirestoreCollection<Mascota>

  constructor(private database: AngularFirestore) {
    this.mascotasCollection = database.collection('mascotas')
  }
  obtenerMascota(){
    return this.mascotasCollection.snapshotChanges().
    pipe(map(action => action.map(a => a.payload.doc.data())))
  }

}
