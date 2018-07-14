import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { ValidationService } from '../../services/validators';

import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

// import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public signUpForm: FormGroup;
  public errorMessage: string = '';
  // public user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    private auth: AuthProvider,
    private validators: ValidationService
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, this.validators.emailValidator]],
      password: ['', [Validators.required, this.validators.passwordValidator]],
      cf_password: ['', [Validators.required, this.validators.confirmPassword]],
      team: ['', Validators.required]
    }, { validator: this.validators.confirmPassword });
  }

  signUp() {
    let params = this.signUpForm.value;
    let credentials = {
      email: params.email,
      password: params.password
    }

    this.auth.signUpAuth(credentials)
      .then(() => this.navCtrl.setRoot(HomePage))
      .catch(error => {
        this.errorMessage = error.message;
      });;
  }
}
