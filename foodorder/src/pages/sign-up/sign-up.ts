import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  // email, password, confirm password, fullname, team, location
  email: string;
  password: string;
  confirmPass: String;
  fullName: String;
  team: string;
  location: string;
  phoneNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  async signUp() {
    const account = {
      email: this.email,
      password: this.password,
      fullName: this.fullName,
      team: this.team,
      location: this.location,
      phoneNumber: this.phoneNumber,
    }
    console.log(account);
    const user = await this.firebaseProvider.createFirebaseAccount(account);
    console.log(user);
  }

}
