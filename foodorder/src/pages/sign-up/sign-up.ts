import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';

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
  // // email, password, confirm password, fullname, team, location
  // email: string;
  // password: string;
  // confirmPass: String;
  // fullName: String;
  // team: string;
  // location: string;
  // phoneNumber: string;
  signUpForm: FormGroup;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider, private formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      password: ['',  Validators.required],
      confirmPass: ['',  Validators.required],
      fullName: ['',  Validators.required],
      team: '',
      location: '',
      phoneNumber: ['',  Validators.required], 
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    const account = this.signUpForm.value;

    console.log(account);

    const result = this.firebaseProvider.createFirebaseAccount(account);
   
    result.then((res) => {
      this.firebaseProvider.updateProfile(account, res.user);
      this.firebaseProvider.createCustomUser(res.user.uid, account);
      this.firebaseProvider.authUser(account).then((_res) => {
        this.navCtrl.popAll();
        this.navCtrl.setRoot(HomePage);
        // console.log(this.navCtrl.getPrevious());
      }).catch ((e) => {
        this.message = e.message;
      });
    }).catch((e) => {
      this.message = e.message;
    })
  }

}
