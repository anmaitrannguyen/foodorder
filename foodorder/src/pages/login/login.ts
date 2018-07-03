import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { AuthProvider } from '../../providers/auth/auth';

import { ValidatorService } from '../../services/validators';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public params = {
    email: '',
    password: '',
  }

  public loginForm: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidatorService.emailValidator]],
      'password': ['', Validators.required, ValidatorService.passwordValidator]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.auth.loginWithEmail(this.params.email, this.params.password)
        .then(() => {
          this.navCtrl.setRoot(HomePage, {
            userEmail: this.params.email
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  goSignup() {
    this.navCtrl.push(SignupPage);
  }

  goForgot() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
