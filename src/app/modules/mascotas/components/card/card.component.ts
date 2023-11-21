import { Component } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //coleccion basada en la interfaz mascota
  coleccionMascota: Mascota[] = [];

  mascotaSeleccionada!: Mascota; // toma valores vacíos o "any"

  modalVisible: boolean = false;

  // declaramos el servicio CRUD
  constructor(public servicioCrud: CrudService){}


  ngOnInit(): void{
    /* del servicio Crud, llamamos a obtener mascota y los guardamos
    en la colección */
    this.servicioCrud.obtenerMascota().subscribe(mascota =>{
      this.coleccionMascota = mascota;
    })
  }


  
}
