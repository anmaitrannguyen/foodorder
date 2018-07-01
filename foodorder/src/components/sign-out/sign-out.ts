import { Component } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the SignOutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sign-out',
  templateUrl: 'sign-out.html'
})
export class SignOutComponent {

  text: string;

  constructor(private firebaseProvider: FirebaseProvider, 
    public navCtrl: NavController,
    private alertCtrl: AlertController) {
  }

  signOut = () => {
   this.showConfirm();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to sign out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.firebaseProvider.signOut();
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
