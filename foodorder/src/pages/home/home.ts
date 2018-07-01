import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: object;
  constructor(public navCtrl: NavController, private firebaseProvider: FirebaseProvider) {
    // this.afAuth.auth.signOut(); 
    this.user = this.firebaseProvider.getCurrentUser();
  }
 }
