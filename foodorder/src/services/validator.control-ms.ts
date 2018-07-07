import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validators';

@Component({
  selector: 'control-messages',
  template: `<p class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</p>`
})

export class ValidationControlMessages {

  @Input() control: FormControl;

  constructor(private validatorService: ValidationService) { }

  get errorMessage() {
    if (this.control) {
      for (let propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return this.validatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
      return null;
    }
  }
}
