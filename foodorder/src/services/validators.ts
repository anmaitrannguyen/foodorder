import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Trường bắt buộc',
      'invalidEmailAddress': 'Định dạng email không đúng',
      'invalidPassword': 'Độ dài mật khẩu tối thiểu 8 ký tự và bao gồm chữ/ số.',
      'invalidConfirmPassword': 'Mật khẩu xác nhận không khớp',
      'minlength': 'Tối thiểu 9 ký tự.',
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
      if (signupForm.value.password === signupForm.value.confirmPassword) {
        signupForm.controls.confirmPassword.setErrors(null);
        return null
      } else {
        signupForm.controls.confirmPassword.setErrors({ "incorrect": true });
        return { 'invalidConfirmPassword': true };
      }
    }
  }
}
