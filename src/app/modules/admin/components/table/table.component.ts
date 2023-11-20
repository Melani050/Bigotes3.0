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
  coleccionMascotas: Mascota [] = []; // creamos colección basada en interfaz Mascota

  mascotaSeleccionada!: Mascota; // ! -> recibir valores vacíos

  

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
  });

  // patentamos servicio de forma local - llamamos al servicio CRUD
  constructor(public servicioCrud: CrudService){}
  

  ngOnInit(): void{
    /* llamamos función obtenerMascota y le enviamos los nuevos valores
    del formulario mascota (se guardan en la colección) */
    this.servicioCrud.obtenerMascota().subscribe(
      mascota => {
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
      // llamamos al servicioCrud; función crearProducto; seteamos nuevaMascota
      await this.servicioCrud.crearMascota(nuevaMascota)
      .then(mascota => {
        alert("Ha agregado una nueva mascota con éxito");
      })
      .catch((error) => {
        alert("Hubo un error al cargar la nueva mascota \n"+error);
      })

    }
  }

  // EDITAR MASCOTA -> vincula al modal editar
  mostrarEditar(mascotaSeleccionada: Mascota){
    this.mascotaSeleccionada = mascotaSeleccionada;

    /* retorna y envia los valores de la mascota 
    seleccionado, el ID no se vuelve a enviar porque 
    no se modifica */
    this.mascota.setValue({
        nombre: mascotaSeleccionada.nombre,
        imagen: mascotaSeleccionada.imagen,
        alt: mascotaSeleccionada.alt,
        sexo: mascotaSeleccionada.sexo,
        tamanio: mascotaSeleccionada.tamanio,
        raza: mascotaSeleccionada.raza,
        personalidad:mascotaSeleccionada.personalidad,
        edad: mascotaSeleccionada.edad,
        peso: mascotaSeleccionada.peso,
        castrado: mascotaSeleccionada.castrado,
        desparasitado: mascotaSeleccionada.desparasitado,
    })
  }
  /* VINCULA A BOTÓN "guardar cambios"
   recibe los valores nuevos ingresados en el formulario*/
  editarMascota(){
    let datos: Mascota = {
      idMascota: this.mascotaSeleccionada.idMascota,
      // signo de exclamación "!" -> puede recibir valores vacíos al inicializar
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
      desparasitado: this.mascota.value.desparasitado!
    }

    this.servicioCrud.modificarMascota(this.mascotaSeleccionada.idMascota, datos)
    .then(producto => {
      alert("La mascota fue modificada con éxito.");
    })
    .catch(error => {
      alert("No se pudo modificar la mascota. \n"+error);
    })
  }

  
}