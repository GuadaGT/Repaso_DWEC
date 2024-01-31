import { Component } from '@angular/core';
import {CalzadoService} from "../../services/calzado.service";
import {Calzado} from "../../common/calzado";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent
{
  pedido: Calzado[] = [];
  precioTotal = 0;
  constructor(private calzadoService: CalzadoService)
  {
    this.cargarPedido();
  }

  private cargarPedido()
  {
    this.calzadoService.carrito.subscribe(
      {
        next: value => {
          this.pedido = value;
        },
        error:(err)=>{
          console.error(err);
        },
        complete:()=>{
          console.log('Carrito Completo');
        }
      }
    )
    this.calzadoService.precioCarrito.subscribe(
      {
        next:value => {
          this.precioTotal = value;
        },
        error:(err)=>{
          console.error(err);
        },
        complete:()=>{
          console.log('Carrito Completo');
        }
      }
    )
  }
}
