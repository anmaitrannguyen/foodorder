
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  public user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  async signupAuth(credentials) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      console.log(result);
      return result;
    }
    catch (e) {
      console.error(e);
    }
  }

  async loginAuth(credentials) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
      return result;
    }
    catch (e) {
      console.error(e);
    }
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}
