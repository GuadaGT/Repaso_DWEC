import { Component, OnInit } from '@angular/core';
import { Calzado } from "../../common/calzado";
import { CalzadoService } from "../../services/calzado.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidators } from "../../validators/validaciones";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-calzado-nuevo',
  templateUrl: './calzado-nuevo.component.html',
  styleUrls: ['./calzado-nuevo.component.css']
})
export class CalzadoNuevoComponent implements OnInit
{
  editar = false;
  calzados: Calzado[] = [];
  formCalzado: FormGroup = this.formBuilder.group(
    {
      _id: [''],
      __v: [0],
      nombre: ['', [Validators.minLength(5),
        Validators.required,
        FormValidators.notOnlyWhiteSpace]],
      imagen: ['', [Validators.required]],
      precio: [0, [Validators.required, Validators.min(0)]],
      tipo: ['', [Validators.required, Validators.minLength(3), FormValidators.notOnlyWhiteSpace]],
      talla: [0, [Validators.required, Validators.min(36), Validators.max(50)]],
      color: ['', [Validators.required, Validators.minLength(2), FormValidators.notOnlyWhiteSpace]]
    }
  );

  constructor(private calzadoService: CalzadoService,
              private formBuilder: FormBuilder) {
  }

  get nombre(): any {
    return this.formCalzado.get('nombre');
  }

  get imagen(): any {
    return this.formCalzado.get('imagen');
  }

  get precio(): any {
    return this.formCalzado.get('precio');
  }

  get tipo(): any {
    return this.formCalzado.get('tipo');
  }

  get talla(): any {
    return this.formCalzado.get('talla');
  }

  get color(): any {
    return this.formCalzado.get('color');
  }

  ngOnInit(): void {}


  agregarCalzado() {
    if (this.formCalzado.valid) {
      const nuevoCalzado = this.formCalzado.value;
      this.calzadoService.addCalzado(nuevoCalzado).subscribe(
        (respuesta) => {
          console.log('Calzado agregado:', respuesta);

        },
        (error) => {
          console.error('Error al agregar calzado:', error);
        }
      );
    }
  }

  newCalzado()
  {
    this.formCalzado.reset();
  }

  protected readonly faCirclePlus = faCirclePlus;
}
