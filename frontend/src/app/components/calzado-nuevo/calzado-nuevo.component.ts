import { Component, OnInit } from '@angular/core';
import { CalzadoService } from "../../services/calzado.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidators } from "../../validators/validaciones";

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-calzado-nuevo',
  templateUrl: './calzado-nuevo.component.html',
  styleUrls: ['./calzado-nuevo.component.css']
})
export class CalzadoNuevoComponent
{
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
  constructor(private calzadoService: CalzadoService,
              private  formBuilder: FormBuilder,
              //Redirigir con el elemento router, gestiona las rutas
              private router : Router)
  {
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


  insterar() {
    if(this.formCalzado.invalid)
    {
      this.formCalzado.markAllAsTouched();
      return;
    }
    const  miCalzado = this.formCalzado.getRawValue();
    //"Borrar id de mongo" para insertar correctamente el objeto nuevo le eliminamos el id que "generamos"
    //Sería lo mismo que comentar el delete miCalzado._id y poner el valor inicial de id a null
    delete miCalzado._id;
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

}
