import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio/inicio.component';

const routes: Routes = [
//lo primero que muestra es el inicio
  {path: '', component:InicioComponent},

// lazyloading
  {path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
