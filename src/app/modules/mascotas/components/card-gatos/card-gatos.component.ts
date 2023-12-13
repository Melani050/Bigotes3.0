import { Component } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-gatos',
  templateUrl: './card-gatos.component.html',
  styleUrls: ['./card-gatos.component.css']
})
export class CardGatosComponent {
  coleccionMascotas: Mascota[] = []; // todas las mascotas

  gatos: Mascota[] = []; // mascotas especie = gato

  mascotaSeleccionada!: Mascota;

  modalVisible: boolean = false;

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerMascota().subscribe(mascota =>{
      this.coleccionMascotas = mascota;

      this.mostrarPerros();
    })
  }

  mostrarVer(info: Mascota){
    // al seleccionar "ver más" el modal visible pasa a "true"
    this.modalVisible = true;
    // muestra la información de la mascota que se seleccione
    this.mascotaSeleccionada = info;
  }

  mostrarPerros(){
    // forEach itera la colección/ arreglo
    this.coleccionMascotas.forEach(mascota =>{
      /* si la categoría de mascota es igual a "gatos"
        se va a enviar a la colección "gatos"*/
      if(mascota.especie === "gato"){
        this.gatos.push(mascota);
      }
    })
  }
}
