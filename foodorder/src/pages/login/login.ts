import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { USER } from './mocks/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = '';

  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authProvider: AuthProvider,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });


    this.email = USER.email;
    this.password = USER.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    const data = this.loginForm.value;

    this.authProvider.signInWithEmail(data).then(
      this.loginSuccess.bind(this),
      this.loginError.bind(this),
    );
  }

  loginSuccess({ user }) {
    this.navCtrl.push(HomePage, { user });
  }

  loginError({ message }) {
    this.errorMessage = message;
  }

  goToSignUp() {
    this.navCtrl.push(RegisterPage);
  }

}
