import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// import AuthenProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthProvider {
  // private user: firebase.User;

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    console.log('Hello AuthProvider Provider');
    // angularFireAuth.authState.subscribe(user => {
    //   this.user = user;
    // });
  }

  signInWithEmail(credentials) {
    console.log('Log in');
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signUp(credentials) {
    console.log('Resigter');
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

}
