import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardtrasparente',
  templateUrl: './cardtrasparente.component.html',
  styleUrls: ['./cardtrasparente.component.css']
})
export class CardtrasparenteComponent {
  constructor(private router: Router) {}

  buscarMascota() {
    // Redirige a la página de resultados cuando se hace clic en el botón
    this.router.navigate(['/buscador']);
  }
}
