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
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    tamanio: new FormControl('', Validators.required),
    raza: new FormControl('', Validators.required),
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
    del formulario mascota (se guardan en la colección) */
    this.servicioCrud.obtenerMascota().subscribe(mascota => {
      this.coleccionMascotas = mascota;
    })
  } 

  async agregarMascota(){
    if (this.mascota.valid){
      let nuevaMascota: Mascota = {
        idMascota: '', // único que guardamos vacío; lo creamos en el CRUD
        nombre: this.mascota.value.nombre!,
        imagen: this.mascota.value.imagen!,
        alt: this.mascota.value.alt!,
        sexo: this.mascota.value.sexo!,
        tamanio: this.mascota.value.tamanio!,
        raza: this.mascota.value.raza!,
        personalidad: this.mascota.value.personalidad!,
        edad: this.mascota.value.edad!,
        peso: this.mascota.value.peso!,
        castrado: this.mascota.value.castrado!,
        desparasitado: this.mascota.value.desparasitado!,
        
      };

      // ENVIAMOS NUESTRA NUEVA MASCOTA
      // llamamos al servicioCrud; función crearProducto; seteamos nuevoProducto
      await this.servicioCrud.crearMascota(nuevaMascota)
      .then(mascota => {
        alert("Ha agregado una nueva mascota con éxito");
      })
      .catch(error => {
        alert("Hubo un error al cargar la nueva mascota"+error);
      })
    }
  }




}
