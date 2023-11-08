import { Injectable } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; // mapea valores

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Creo la colección "mascotasCollection" basandome el la colección "AngularFirestoreCollection"
  // y respetando la interfaz de Mascota.
  private mascotasCollection: AngularFirestoreCollection<Mascota>

  // Defino de forma local "AngularFirestore" como database.
  constructor(private database: AngularFirestore) {
    // Referencio la colección mascotas de la base de datos con mi colección local. 
    this.mascotasCollection = database.collection('mascotas')
  }

  // CRUD
  crearMascota(){}
  obtenerMasco(){}
  modificarMascota(){}
  eliminarMascota(){}


}
