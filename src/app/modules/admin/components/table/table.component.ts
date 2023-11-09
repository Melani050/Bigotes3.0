import { Component } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionMascotas: Mascota[] = []; // creamos colección basada en interfaz Mascota

  mascotaSeleccionada!: Mascota; // ! -> recibir valores vacios

  modalVisibleMascota: boolean = false;

  // formulario vinculado al archivo HTML
  mascota = new FormGroup({
    nombre: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    tamanio: new FormControl('', Validators.required),
    raza: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    personalidad: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
    castrado: new FormControl('', Validators.required),
    desparasitado: new FormControl('', Validators.required),
  })

  // patentamos servicio de forma local - llamamos al servicio CRUD
  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    /* llamamos función obtenerMascota y le enviamos los nuevos valores
    del formulario producto (se guardan en la colección) */
    this.servicioCrud.obtenerMascota().subscribe(mascota => {
      this.coleccionMascotas = mascota;
    })
  } 




}
