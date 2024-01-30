import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalzadoListComponent } from './components/calzado-list/calzado-list.component';
import { DetalleCalzadoComponent } from './components/detalle-calzado/detalle-calzado.component';
import { CalzadoNuevoComponent } from './components/calzado-nuevo/calzado-nuevo.component';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CalzadoListComponent,
    DetalleCalzadoComponent,
    CalzadoNuevoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
