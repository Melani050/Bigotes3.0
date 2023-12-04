import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/*import { CrudService } from "";*/
import { Mascota } from 'src/app/models/mascotas';

@Component({
  selector: 'app-cardtransparente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardtransparente.component.html',
  styleUrls: ['./cardtransparente.component.css']
})
export class CardtransparenteComponent {

 coleccionMascotas: Mascota [] = []; // creamos colección basada en interfaz Mascota

  coleccionGatos: Mascota [] = []; // creamos colección basada en interfaz Gato

  coleccionPerros: Mascota [] = []; // creamos colección basada en interfaz Perro

  mascotaSeleccionada!: Mascota; // ! -> recibir valores vacíos

  mascota: any; // declare la propiedad mascota

/*
  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    /* llamamos función obtenerMascota y le enviamos los nuevos valores
    del formulario mascota (se guardan en la colección) 
    this.servicioBuscar.obtenerMascota().subscribe(
      mascota => {
      this.coleccionMascotas = mascota;
    })*/
 



  /*
  mostrarMascotas(){
    // forEach itera la colección/ arreglo
    this.coleccionMascotas.forEach(mascota =>{

      if(mascota.especie === "mascota"){
        this.mascota.push(mascota);
      }
    })
  }
*/
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

}
