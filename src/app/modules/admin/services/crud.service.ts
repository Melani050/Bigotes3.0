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

  crearMascota(mascota: Mascota){
    // retorna una nueva promesa, cerea un nuevo id para una mascota
    return new Promise(async(resolve, reject)=>{
      try{
        // Esta generando un nuevo id en la BD, que se guarda el la constante.
        const idMascota = this.database.createId();
        mascota.idMascota = idMascota;

        const resultado = await this.mascotasCollection.doc(idMascota).set(mascota)

        resolve(resultado);

      }catch(error){
        reject(error);
      }
    })
  }
  obtenerMascota(){}
  modificarMascota(){}
  eliminarMascota(){}


}

