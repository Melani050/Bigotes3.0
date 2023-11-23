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

}
