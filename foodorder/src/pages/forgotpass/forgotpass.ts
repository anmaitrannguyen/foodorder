import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotpassPage {
  resetPasswordForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController, 
    private fb: FormBuilder,
    private authProvider: AuthProvider,
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpassPage');
  }

  resetPassword() {
    const data = this.resetPasswordForm.value;

    this.authProvider.resetPasswordWithEmail(data).then(
      data => this.navCtrl.push(HomePage, {}),
      error => this.errorMessage = error.message
    );
  }

}
