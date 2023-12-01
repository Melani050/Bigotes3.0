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

  coleccionGatos: Mascota [] = []; // creamos colección basada en interfaz Gato

  coleccionPerros: Mascota [] = []; // creamos colección basada en interfaz Perro

  mascotaSeleccionada!: Mascota; // ! -> recibir valores vacíos

  mascota: any; // declare la propiedad mascota



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
    this.coleccionMascotas.forEach(mascota =>{

      if(mascota.especie === "mascota"){
        this.mascota.push(mascota);
      }
    })
  }

  obtenerPerros(){
    // forEach itera la colección/ arreglo
    this.coleccionMascotas.forEach(mascota =>{

      if(mascota.especie === "perro"){
        this.mascota.push(mascota);
      }
    })
  }

  obtenerGatos(){
    // forEach itera la colección/ arreglo
    this.coleccionMascotas.forEach(mascota =>{

      if(mascota.especie === "gatos"){
        this.mascota.push(mascota);
      }
    })
  }

  mostrarMascotas(){
    
  }
}
