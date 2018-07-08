import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { ValidationService } from '../../services/validators';

import { HomePage } from '../../pages/home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

// import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  // public user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private fb: FormBuilder,
    private validators: ValidationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.validators.emailValidator]],
      password: ['', [Validators.required, this.validators.passwordValidator]]
    })
  }

  login() {
    let params = this.loginForm.value;

    if (!params.email) {
      return;
    }

    let credentials = {
      email: params.email,
      password: params.password
    }

    this.auth.loginAuth(credentials)
      .then(() => this.navCtrl.setRoot(HomePage));
  }

  goSignup() {
    this.navCtrl.push(SignupPage);
  }

  goForgot() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
