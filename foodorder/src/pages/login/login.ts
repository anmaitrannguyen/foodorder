import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password';
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';

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
  loginForm: FormGroup;
  invalid: boolean;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private firebaseProvider: FirebaseProvider) {
      
    this.loginForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      password: ['',  Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    const loginData = this.loginForm.value;
    
    if(this.loginForm.valid) {
      this.invalid = false;
      const result = this.firebaseProvider.authUser({...loginData});

      result.then((res) => {
        //goto Home page
        this.navCtrl.setRoot(HomePage);
      }).catch((e) => {
        this.message = e.message;
      });
    } else {
      this.invalid = true;
    }
  }
  forgotPass() {
    this.navCtrl.push(ResetPasswordComponent);
  }

  signUp() {
    this.navCtrl.push(SignUpPage);
  }
}
