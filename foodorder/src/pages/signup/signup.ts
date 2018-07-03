import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../../pages/login/login';

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
  public params = {
    email: '',
    password: '',
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // onSignup(): void {
  //   this.auth.signUpWithEmail(this.email, this.password)
  //     .then(() => {
  //       this.navCtrl.setRoot(LoginPage);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }

}
