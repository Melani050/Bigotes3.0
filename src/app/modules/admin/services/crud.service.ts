import { Injectable } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; // mapea valores

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
}
