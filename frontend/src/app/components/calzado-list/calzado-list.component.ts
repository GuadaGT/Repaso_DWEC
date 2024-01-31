import { Component, OnInit } from '@angular/core';
import { Calzado } from "../../common/calzado";
import { CalzadoService } from "../../services/calzado.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { faCirclePlus, faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FormValidators } from "../../validators/validaciones";

@Component({
  selector: 'app-calzado-list',
  templateUrl: './calzado-list.component.html',
  styleUrls: ['./calzado-list.component.css']
})
export class CalzadoListComponent implements OnInit {

  calzados: Calzado[] = [];
  formCalzado: FormGroup = this.formBuilder.group(
    {
      _id: [''],
      nombre: ['', [Validators.minLength(5),
        Validators.required,
        FormValidators.notOnlyWhiteSpace]],
      imagen: ['', Validators.required],
      precio: [0, [Validators.required,
        Validators.min(0)]],
      tipo: ['', [Validators.minLength(3),
        Validators.required,
        FormValidators.notOnlyWhiteSpace]],
      talla: [0, [Validators.required,
        Validators.min(36),
        Validators.max(50)]],
      color: ['', [Validators.minLength(2),
        Validators.required,
        FormValidators.notOnlyWhiteSpace]],
    }
  );
  editar = false;

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

  onSubmit() {
    if (this.editar) {
      const id = this.formCalzado.getRawValue()._id;
      this.calzadoService.updateCalzado(id, this.formCalzado.getRawValue()).subscribe(
        {
          next: value => {
            this.loadCalzadosList();
            alert(value.status);
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('Complete');
          }
        }
      );
    } else {
      this.calzadoService.addCalzado(this.formCalzado.getRawValue()).subscribe(
        {
          next: value => {
            this.loadCalzadosList();
            alert(value.status);
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('Complete');
          }
        }
      );
    }
  }

  loadCalzado(calzado: Calzado) {
    this.formCalzado.setValue(calzado);
    this.editar = true;
  }

  newCalzado() {
    this.formCalzado.reset();
    this.editar = false;
  }

  removeCalzado(calzado: Calzado) {
    if (confirm('¿Desea borrar ' + calzado.nombre + '?')) {
      this.calzadoService.deleteCalzado(calzado._id).subscribe(
        {
          next: value => {
            alert(value.status);
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('Complete');
          }
        }
      );
    }
  }

  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faCircleXmark = faCircleXmark;
  protected readonly faTrashCan = faTrashCan;
}
