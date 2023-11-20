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
  private mascotasColeccion: AngularFirestoreCollection<Mascota>

  // Defino de forma local "AngularFirestore" como database.
  constructor(private database: AngularFirestore) {
    // Referencio la colección mascotas de la base de datos con mi colección local. 
    this.mascotasColeccion = database.collection('mascotas')
  }

  // CRUD

  crearMascota(mascota: Mascota){
    // retorna una nueva promesa, cerea un nuevo id para una mascota
    return new Promise(async(resolve, reject)=>{
      try{
        // Esta generando un nuevo id en la BD, que se guarda el la constante.
        const id =  this.database.createId();
        mascota.idMascota = id;

        const resultado = await this.mascotasColeccion.doc(id).set(mascota)

        resolve(resultado);

      }catch(error){
        reject(error);
      }
    })
  }
  obtenerMascota(){
      // snapshoot -> captura los cambios
      // pipe -> tubería por dónde viajan esos nuevos datos
      // map -> mapea los datos los recorre, los lee
    return this.mascotasColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  /* función para EDITAR PRODUCTO
   se envia el ID de la mascota seleccionada y su nueva informacion*/
  modificarMascota(idMascota: string, nuevaData: Mascota){
    return this.database.collection('mascotas').doc(idMascota).update(nuevaData);
  }
  eliminarMascota(){}

}

