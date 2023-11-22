import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BuscadoresService {
  constructor(private firestore: AngularFirestore) {}

  obtenerMascotas() {
    // Reemplaza 'mascotas' con el nombre de tu colección en Firestore
    return this.firestore.collection('mascotas').valueChanges();
  }
}
