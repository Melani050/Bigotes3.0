import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //lo primero que muestra es el inicio
  { path: '', component: InicioComponent },

  // lazyloading
  {
    //los path acá van vacios ''
    path: '',loadChildren: () =>import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/mascotas/mascotas.module').then(m=>m.MascotasModule)
  } 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
