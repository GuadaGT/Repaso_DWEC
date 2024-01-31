import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalzadoListComponent} from "./components/calzado-list/calzado-list.component";
import {CalzadoNuevoComponent} from "./components/calzado-nuevo/calzado-nuevo.component";
import {PedidoComponent} from "./components/pedido/pedido.component";
import {DetalleCalzadoComponent} from "./components/detalle-calzado/detalle-calzado.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CalzadoListComponent
  },
  {
    path: 'productos',
    component: DetalleCalzadoComponent
  },
  {
    path: 'nuevo',
    component: CalzadoNuevoComponent
  },
  {
    path: 'pedido',
    component: PedidoComponent
  },
  {
    path: '**',
    redirectTo: '/productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
