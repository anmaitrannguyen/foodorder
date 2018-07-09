import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';


@Injectable()
export class ManualValidationService {

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(formGroup: FormGroup, field: string, subgroup?: string) {
    if (subgroup) {
      return !formGroup.get(subgroup).get(field).valid && formGroup.get(subgroup).get(field).touched;
    } else {
      return !formGroup.get(field).valid && formGroup.get(field).touched;
    }
  }

  displayFieldCss(formGroup: FormGroup, field: string, subgroup?: string) {
    return {
      'has-error': this.isFieldValid(formGroup, field, subgroup)
    };
  }

  getError(formGroup: FormGroup, field: string, subgroup?: string) {
    if (subgroup) {
      return formGroup.get(subgroup).get(field).getError;
    } else {
      return formGroup.get(field).getError;
    }
  }
}