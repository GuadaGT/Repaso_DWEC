import { Component, OnInit } from '@angular/core';
import { Calzado } from "../../common/calzado";
import { CalzadoService } from "../../services/calzado.service";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import {faEdit, faShoppingCart, faTrashCan} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-calzado-list',
  templateUrl: './calzado-list.component.html',
  styleUrls: ['./calzado-list.component.css']
})
export class CalzadoListComponent
{
  listaCalzado: Calzado[] = [];
  constructor(private calzadoService: CalzadoService)
  {
    this.loadCalzado();
  }

  private loadCalzado()
  {
    this.calzadoService.getAll().subscribe(
      {
        next: value => {
          this.listaCalzado = value;
        },
        error:(err)=>{
          console.error(err);
        },
        complete:()=>{
          console.log('Complete');
        }
      }
    )
  }

  protected readonly faEdit = faEdit;
  protected readonly faTrashCan = faTrashCan;

  borrarCalzado(calzado: Calzado)
  {
    if(confirm('¿Desea borrar el calzado ' + calzado.nombre + '?')){
      this.calzadoService.borrarCalzado(calzado._id).subscribe(
        {
          next: value => {
            alert(value.status);
            this.loadCalzado();
          }
        }
      )
    }
  }

  protected readonly faShoppingCart = faShoppingCart;

  addToPedido(calzado: Calzado)
  {
    this.calzadoService.addCalzadoToCarrito(calzado);
  }
}
