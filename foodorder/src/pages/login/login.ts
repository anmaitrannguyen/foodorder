import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthProvider } from '../../providers/auth/auth';

import { ValidationService } from '../../services/validators';

import { HomePage } from '../../pages/home/home';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { auth } from 'firebase';

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
    private _auth: AuthProvider,
    private fb: FormBuilder,
    private validators: ValidationService,
    private afAuth: AngularFireAuth
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.validators.emailValidator]],
      password: ['', [Validators.required, this.validators.passwordValidator]]
    })
  }

  // googleLoginViaPopup() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider)
  //     .then(credentials => console.log(credentials));
  // }



  login() {
    let params = this.loginForm.value;

    if (!params.email) {
      return;
    }

    let credentials = {
      email: params.email,
      password: params.password
    }

    this._auth.loginAuth(credentials)
      .then(() => this.navCtrl.setRoot(HomePage));
  }

  goSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  goForgot() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
