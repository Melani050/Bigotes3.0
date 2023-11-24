import { Component } from '@angular/core';
// NUEVA INTERFAZ
import { Mascota } from 'src/app/models/mascotas';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  public list: Mascota[];
  constructor(){
    // INICIALIZA LA PROPIEDAD INFO
    this.list = [
      {
        id: '',
        nombre: '',
        sexo: '',
        especie:'',
        tamanio: '',
        raza: '',
        imagen: '',
        alt: '',
        personalidad: '',
        edad: '',
        peso: '',
        castrado: '',
        desparacitado: ''
      }
    ]
    }}
