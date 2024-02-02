import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CalzadoService} from "../../services/calzado.service";
import {Calzado} from "../../common/calzado";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faEdit, faShoppingCart, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FormValidators} from "../../validators/validaciones";

@Component({
  selector: 'app-detalle-calzado',
  templateUrl: './detalle-calzado.component.html',
  styleUrl: './detalle-calzado.component.css'
})
export class DetalleCalzadoComponent
{
  calzado!: Calzado;
  formCalzado: FormGroup =  this.formBuilder.group(
    {
      id: [''],
      nombre: ['',[Validators.required,
        Validators.minLength(5),
        FormValidators.notOnlyWhiteSpace]],
      imagen: ['',[Validators.required,
      FormValidators.notImageFile]],
      precio: [0,[Validators.required],
      Validators.min(0)],
      tipo: ['',[Validators.required,
      Validators.minLength(3),
      FormValidators.notOnlyWhiteSpace]],
      talla: [0,[Validators.required,
      Validators.min(36),
      Validators.max(50)]],
      color: ['',[Validators.required,
      Validators.minLength(2),
      FormValidators.notOnlyWhiteSpace]],
    }
  );
  constructor(private  activatedRoute: ActivatedRoute,
              private calzadoService: CalzadoService,
              private  formBuilder: FormBuilder,
              //Redirigir con el elemento router, gestiona las rutas
              private router : Router)
  {
    this.loadCalzado();
  }

get nombre()
  {
    return this.formCalzado.get('nombre');
  }
get imagen()
  {
    return this.formCalzado.get('imagen');
  }
get precio()
  {
    return this.formCalzado.get('precio');
  }
get tipo()
  {
    return this.formCalzado.get('tipo');
  }
get talla()
  {
    return this.formCalzado.get('talla');
  }
get color()
  {
    return this.formCalzado.get('color');
  }

  //formcontrolname es lo que vincula con la parte del component, ts
  private loadCalzado()
  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.calzadoService.getOne(id).subscribe(
      {
        next: value => {
          this.calzado = value;
          this.formCalzado.patchValue(value);
          console.log(this.calzado);
        },
        error:(err)=>{
          console.error(err);
        }
      }
    )
  }

  actualizar() {
    if(this.formCalzado.invalid)
    {
      this.formCalzado.markAllAsTouched();
      return;
    }
    this.calzadoService.updateCalzado(this.formCalzado.getRawValue()).subscribe(
      {
        next:value => {
          alert(value.nombre + ': Actualizado.');
          //Tiene que ir con la primera barra para no concatenar la ruta haciendola una ruta hijo. De esta forma hacemos una ruta raiz
          this.router.navigateByUrl('/calzado/list');
        },
        error: (err)=>{
          console.error(err);
        }
      }
    )
  }

  protected readonly faTrashCan = faTrashCan;
  protected readonly faEdit = faEdit;
  protected readonly faShoppingCart = faShoppingCart;
}
