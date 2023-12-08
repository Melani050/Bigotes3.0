import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/sevices/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-table-usuario',
  templateUrl: './table-usuario.component.html',
  styleUrls: ['./table-usuario.component.css']
})
export class TableUsuarioComponent {
  coleccionUsuario: Usuario[] = [];// coleccion basada en interfaz Usuario
  usuarioSeleccionado!: Usuario; // ! -> recibir valores vacíos
  // se vincula con el archivo html(formulario)
  usuario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    contrasena: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required),
  })

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    // llamamos funcion obtenerUsuario (se envia los nuevos parametros del formulario) ->todavia no se puede crear usuario
    // se guarda en la coleccion
    this.servicioCrud.obtenerUsuario().subscribe(
      usuario => {
        this.coleccionUsuario = usuario;
      }
    )
  }


}
