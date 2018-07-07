import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../../pages/login/login';

import { ValidationService } from '../../services/validators';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    private auth: AuthProvider,
    private validators: ValidationService
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, this.validators.emailValidator]],
      password: ['', [Validators.required, this.validators.passwordValidator]],
      cf_password: ['', [Validators.required, this.validators.confirmPassword]],
      team: ['', Validators.required]
    }, { validator: this.validators.confirmPassword });
  }

  signup() {
    let params = this.signupForm.value;
    let credentials = {
      email: params.email,
      password: params.password,
      cf_password: params.cf_password
    }

    // this.auth.signupAuth(credentials)
    //   .then(() => {
    //     this.navCtrl.setRoot()
    //   });
  }
}
