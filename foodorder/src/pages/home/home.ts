import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;

  displayName;

  products: Observable<any[]>;

  constructor(
    private navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    const user = this.navParams.get('user');
    if(user) {
      this.email = user.email;
    }

    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
    });
  }

  ionViewDidLoad() {
    this.products = this.db.list('products').valueChanges();
  }

}
