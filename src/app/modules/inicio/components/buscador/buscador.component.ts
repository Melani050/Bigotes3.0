import { Component } from '@angular/core';
// NUEVA INTERFAZ
import { Mascota } from 'src/app/models/mascotas';
import { BuscadoresService } from './buscadores.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  mascotas: any[];

  constructor(private BuscadoresService: BuscadoresService) {}

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    this.BuscadoresService.obtenerMascotas().subscribe(
      (data) => {
        this.mascotas = data;
      },
      (error) => {
        console.error('Error al obtener mascotas', error);
      }
    );
  }
}
