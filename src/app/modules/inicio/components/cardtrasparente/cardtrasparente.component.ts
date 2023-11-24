import { Component } from '@angular/core';
import { BuscadorService } from "../services/buscador.service";
import { Mascota } from 'src/app/models/mascotas';


@Component({
  selector: 'app-cardtrasparente',
  templateUrl: './cardtrasparente.component.html',
  styleUrls: ['./cardtrasparente.component.css']
})
export class CardtrasparenteComponent {

  coleccionMascotas: Mascota [] = []; // creamos colección basada en interfaz Mascota

  mascotaSeleccionada!: Mascota; // ! -> recibir valores vacíos

  constructor(
    public servicioBuscar: BuscadorService
  ){}

  ngOnInit(): void{
    /* llamamos función obtenerMascota y le enviamos los nuevos valores
    del formulario mascota (se guardan en la colección) */
    this.servicioBuscar.obtenerMascota().subscribe(
      mascota => {
      this.coleccionMascotas = mascota;
      })
  }

 obtenerMascota(){
    // forEach itera la colección/ arreglo
    this.coleccionMascotas.forEach(producto =>{
      /* si la categoría del producto es igual a "collares"
        se va a enviar a la colección "collares"*/
      if(producto.raza === "mascota"){
        this.mascota.push(mascota);
      }
    })
  }
  /*Cambiar este if */
}
