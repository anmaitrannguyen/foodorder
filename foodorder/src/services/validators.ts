
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'This field is required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'invalidConfirmPassword': 'Your new password must be confirmed correctly.',
      'minlength': 'Too short. Your new password must have at least 9 characters.'
    };

    return config[validatorName];
  }

  emailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  passwordValidator(control) {
    // password is between 8 and 20 characters
    // password is a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  confirmPassword(signupForm) {
    if (signupForm.controls) {
      if (signupForm.value.password === signupForm.value.cf_password) {
        signupForm.controls.cf_password.setErrors(null);
        return null
      } else {
        signupForm.controls.cf_password.setErrors({ "incorrect": true });
        return { 'invalidcf_password': true };
      }
    }
  }
}