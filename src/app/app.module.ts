import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    ConcesionariosComponent,
    ConcesionarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
