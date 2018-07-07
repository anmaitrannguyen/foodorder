
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

// import * as firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    private afAuth: AngularFireAuth
  ) {
    console.log('Hello AuthProvider Provider');
  }

  signupAuth(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  loginAuth(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
  }

  // signOut(): void {
  //   this.firebaseAuth.auth.signOut();
  // }
}
