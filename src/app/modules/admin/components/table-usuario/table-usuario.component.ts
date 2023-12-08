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


  // EDITAR MASCOTA -> vincula al modal editar
  mostrarEditar(usuarioSeleccionado: Usuario){
    this.usuarioSeleccionado = usuarioSeleccionado;

    /* retorna y envia los valores del usuario 
    seleccionado, el ID no se vuelve a enviar porque 
    no se modifica */
    this.usuario.setValue({
        nombre: usuarioSeleccionado.nombre,
        email: usuarioSeleccionado.email,
        contrasena: usuarioSeleccionado.contrasena,
        rol: usuarioSeleccionado.rol,
    });
  }
  /* VINCULA A BOTÓN "guardar cambios"
  recibe los valores nuevos ingresados en el formulario*/
  editarUsuario(){
    let datos: Usuario = {
      uid: this.usuarioSeleccionado.uid,
      // signo de exclamación "!" -> puede recibir valores vacíos al inicializar
      nombre: this.usuario.value.nombre!,
      email: this.usuario.value.email!,
      contrasena: this.usuario.value.contrasena!,
      rol: this.usuario.value.rol!,
    }

    this.servicioCrud.modificarUsuario(this.usuarioSeleccionado.uid, datos)
    .then(usuario => {
      alert("El usuario fue modificada con éxito.");
    })
    .catch(error => {
      alert("No se pudo modificar el usuario. \n"+error);
    })
  }

}
