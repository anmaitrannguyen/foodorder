import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { ForgotpassPage } from '../forgotpass/forgotpass';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authProvider: AuthProvider,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    const data = this.loginForm.value;

    this.authProvider.signInWithEmail(data).then(
      data => this.navCtrl.push(HomePage, {user : data.user}),
      error => this.errorMessage = error.message
    );
  }

  goToSignUp() {
    this.navCtrl.push(RegisterPage);
  }
  
  goToForgot() {
    this.navCtrl.push(ForgotpassPage);
  }
}
