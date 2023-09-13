import { Component } from '@angular/core';
// NUEVA INTERFAZ
import { Mascota } from 'src/app/models/mascotas';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Mascota[];

  constructor(){
    // INICIALIZA LA PROPIEDAD INFO
    this.info = [
      {
        id: '',
        nombre: 'Julian',
        sexo: 'Macho',
        tamanio: 'Mediano',
        raza: 'Siames',
        imagen: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-01/Siamese%201.jpg?itok=dS6uQvHe',
        alt: 'Gato siames'
      }
    ]
  }

  ngOnInit(): void{
  }

} 
