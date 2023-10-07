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
        tamanio: 'Pequeño',
        raza: 'Siames',
        imagen: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-01/Siamese%201.jpg?itok=dS6uQvHe',
        alt: 'Gato siames',
        personalidad: 'Curioso',
        edad: '3 meses',
        peso: '500 gr',
        castrado: 'No',
        desparacitado: 'Si'
      },
      {
        id: '',
        nombre: 'Rabanito',
        sexo: 'Macho',
        tamanio: 'Grande',
        raza: 'Border collie',
        imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/2/0/cuales_son_los_cuidados_de_un_border_collie_52029_orig.jpg',
        alt: 'Perro border collie',
        personalidad: 'Hiperactivo',
        edad: '9 meses',
        peso: '6 kg',
        castrado: 'No',
        desparacitado: 'Si'
      },
      {
        id: '',
        nombre: 'Mushi',
        sexo: 'Hembra',
        tamanio: 'Mediano',
        raza: 'Pitbull',
        imagen: 'https://t1.ea.ltmcdn.com/es/posts/0/4/1/2_las_mandibulas_del_pitbull_se_bloquean_al_morder_21140_1_600.jpg',
        alt: 'Perro pitbull',
        personalidad: 'Distraido',
        edad: '7 meses',
        peso: '5 kg',
        castrado: 'No',
        desparacitado: 'No'
      }
    ]
  }

  ngOnInit(): void{
  }

} 
