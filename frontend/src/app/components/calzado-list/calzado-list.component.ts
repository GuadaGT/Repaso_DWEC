import { Component, OnInit } from '@angular/core';
import { Calzado } from "../../common/calzado";
import { CalzadoService } from "../../services/calzado.service";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calzado-list',
  templateUrl: './calzado-list.component.html',
  styleUrls: ['./calzado-list.component.css']
})
export class CalzadoListComponent implements OnInit {

  calzados: Calzado[] = [];
  private pedidoSubject = new BehaviorSubject<Calzado[]>([]);
  pedido$ = this.pedidoSubject.asObservable();

  constructor(private calzadoService: CalzadoService, private router: Router) {}

  ngOnInit(): void {
    this.loadCalzadosList();
  }

  private loadCalzadosList() {
    this.calzadoService.getCalzadoList().subscribe(
      {
        next: value => {
          this.calzados = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    );
  }

  verDetalle(calzado: Calzado) {
    this.router.navigate(['/calzados', calzado._id]);
  }

  addToPedido(calzado: Calzado) {
    const pedidoActual = this.pedidoSubject.value;
    pedidoActual.push(calzado);
    this.pedidoSubject.next(pedidoActual);
  }
}
