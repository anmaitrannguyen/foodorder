import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ToastController, NavController } from 'ionic-angular';

/**
 * Generated class for the ResetPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordComponent {

  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private firebaseProvider: FirebaseProvider,
    private navCtl: NavController) {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
    });
  }
  resetPass() {
    if(this.resetForm.valid)
    {
      const result = this.firebaseProvider.forgotPassWord(this.resetForm.value.email);
      if(!result) {
        this.navCtl.pop();
      }
    } 

  }
}
