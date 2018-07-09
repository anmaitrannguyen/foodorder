import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MatchPassword(): ValidatorFn {
  return function(AC: AbstractControl): { [key: string]: any } | null {
    const password = AC.get('password').value;
    const confirmPass = AC.get('confirmpass').value;
    if (password !== confirmPass) {
      return {matchpass: true};
    }
    return null;
  };
}
