
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

  signUpAuth(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  loginAuth(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}
