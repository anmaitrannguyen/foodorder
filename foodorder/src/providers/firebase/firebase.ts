import { Injectable } from '@angular/core';
import { UserInfo } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../type';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(private afAuth: AngularFireAuth,
     private firebaseDB: AngularFireDatabase,
     private toastCtrl: ToastController) {
    console.log('Hello FirebaseProvider Provider');
  }

  createFirebaseAccount = async (account: Object) => {
    //create firebase user
    return this.afAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']);

    
  }

  updateProfile = (account, user) => {
    user.updateProfile({
      displayName: account['fullName'],
      photoURL: null,
    });
  }

  //create custom user with firebase user id
  createCustomUser = (uid, account) => {
    const userCollection = this.firebaseDB.list('/users');

    return userCollection.set(uid, 
      {
        team: account['team'], 
        location: account['location'], 
        phoneNumber: account['phoneNumber'],
      });
  }
  authUser = (account: Object) => {
    return this.afAuth.auth.signInWithEmailAndPassword(account['email'], account['password']);
  }
  
  forgotPassWord = (email: string) => {
    // let user;
    return this.afAuth.auth.sendPasswordResetEmail(email);
      
  }

  signOut = async () => {
   await this.afAuth.auth.signOut();
  }

  getCurrentUser = () => {
    return this.afAuth.authState;
    // return this.afAuth.auth.onAuthStateChanged;
  }
}
