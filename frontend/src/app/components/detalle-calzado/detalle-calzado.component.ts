import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CalzadoService} from "../../services/calzado.service";

@Component({
  selector: 'app-detalle-calzado',
  templateUrl: './detalle-calzado.component.html',
  styleUrl: './detalle-calzado.component.css'
})
export class DetalleCalzadoComponent
{

  constructor(private  activatedRoute: ActivatedRoute,
              private calzadoService: CalzadoService)
  {
    this.loadCalzado();
  }

  private loadCalzado()
  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.calzadoService.getOne(id).subscribe(
      {
        next: value => {

        },
      }
    )
  }
}
