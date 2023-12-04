import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { ApartadosComponent } from './components/apartados/apartados.component';
import { CardtransparenteComponent } from './components/cardtransparente/cardtransparente.component';

/** ANGULAR MATERIAL */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { InicioRoutingModule } from './inicio-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatFormField } from '@angular/material/form-field';
import { MascotasModule } from "../mascotas/mascotas.module";

@NgModule({
    declarations: [
        InicioComponent,
        CardsComponent,
        CarouselComponent,
        ApartadosComponent,
        CardtransparenteComponent
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        // Hay que exportar el componente para que el inicio pueda utilizarlo
        CardsComponent,
        CarouselComponent,
        ApartadosComponent,
        CardtransparenteComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        InicioRoutingModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatFormFieldModule,
        MascotasModule
    ]
})
export class InicioModule { }
