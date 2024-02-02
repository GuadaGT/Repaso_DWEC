import {FormControl, ValidationErrors} from "@angular/forms";

export class FormValidators
{
  static notOnlyWhiteSpace(control: FormControl): ValidationErrors | null
  {
    if((control.value != null) && (control.value.trim().length == 0))
    {
      return {notOnlyWhiteSpace: true};
    }
    else
    {
      return null;
    }
  }

  static notImageFile(control: FormControl): ValidationErrors | null
  {
    const elementos: string[] = control.value.split('.');
    const fin = elementos[elementos.length-1];
    if((fin === 'jpg' || fin === 'png' || fin === 'jpeg'))
    {
      return null;
    }
    else
    {
      return {notImageFile: true};
    }
  }
}
