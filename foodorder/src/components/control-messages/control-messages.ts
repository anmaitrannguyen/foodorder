import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidatorService } from '../../services/validators';

/**
 * Generated class for the ControlMessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'control-messages',
  templateUrl: 'control-messages.html'
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
