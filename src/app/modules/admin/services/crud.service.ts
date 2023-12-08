import { Injectable } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; // mapea valores
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // pipe -> tubería por dónde viajan esos nuevos datos
  // map -> mapea los datos los recorre, los lee
  // Creo la colección "mascotasCollection" basandome el la colección "AngularFirestoreCollection"
  // y respetando la interfaz de Mascota.
  private mascotasColeccion: AngularFirestoreCollection<Mascota>
  private usuariosColeccion: AngularFirestoreCollection<Usuario>

  // Defino de forma local "AngularFirestore" como database.
  constructor(private database: AngularFirestore) {
    // Referencio la colección mascotas de la base de datos con mi colección local. 
    this.mascotasColeccion = database.collection('mascotas')
    this.usuariosColeccion = database.collection('usuarios')
  }

  // CRUD

  // funcion para CREAR MASCOTA
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
  /* función para EDITAR MASCOTA
   se envia el ID de la mascota seleccionada y su nueva informacion*/
  modificarMascota(idMascota: string, nuevaData: Mascota){
    return this.database.collection('mascotas').doc(idMascota).update(nuevaData);
  }
  /*funcion para ELIMINAR MASCOTA
    se envia el ID de la mascota*/
  eliminarMascota(idMascota: string){
    return new Promise((resolve, reject) => {
      try{
        const resp = this.mascotasColeccion.doc(idMascota).delete()
        resolve (resp)
      }
      catch(error){
        reject(error)
      }
    })
  }

  // USUARIO 
  obtenerUsuario(){
    return this.usuariosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  crearUsuario(usuario: Usuario){
    // retorna una nueva promesa, cerea un nuevo id para una mascota
    return new Promise(async(resolve, reject)=>{
      try{
        // Esta generando un nuevo id en la BD, que se guarda el la constante.
        const id =  this.database.createId();
        usuario.uid = id;

        const resultado = await this.usuariosColeccion.doc(id).set(usuario)

        resolve(resultado);

      }catch(error){
        reject(error);
      }
    })
  }

  //para editar usuario
  modificarUsuario(uid: string, nuevaData: Usuario){
    return this.database.collection('usuarios').doc(uid).update(nuevaData);
  } 
  //para eliminar usuario -> envia su uid
  eliminarUsuario(uid: string){
    return new Promise((resolve, reject) => {
      try{
        const resp = this.usuariosColeccion.doc(uid).delete()
        resolve (resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}

