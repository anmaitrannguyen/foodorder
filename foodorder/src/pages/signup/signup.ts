import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private validservice: ValidationService,
  ) {
    this.signupForm = fb.group({
			email: ['', [Validators.required, this.validservice.emailValidator]],
      password: ['', [Validators.required, this.validservice.passwordValidator]],
      confirmPassword: ['', [Validators.required, this.validservice.confirmPassword]],
      team: ['', [Validators.required]]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
