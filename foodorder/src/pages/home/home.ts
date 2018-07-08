import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider
  ) {

  }

  logout() {
    this.auth.signOut()
      .then(() => this.navCtrl.setRoot(LoginPage));
  }
}
