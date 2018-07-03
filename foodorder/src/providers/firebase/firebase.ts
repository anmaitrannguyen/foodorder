import { Injectable } from '@angular/core';
import { UserInfo } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../type';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import { auth } from 'firebase/app';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private firebaseDB: AngularFireDatabase,
    private toastCtrl: ToastController,
    private firebase: AngularFireDatabase
  ) {
    console.log('Hello FirebaseProvider Provider');
  }

  createFirebaseAccount = async (account: Object) => {
    //create firebase user
    return this.afAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']);
  }

  updateProfile = (account, user) => {
    return user.updateProfile({
      displayName: account['fullName'],
      photoURL: account['photoURL'],
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

  loginWithGoogleAccount = () => {
    const provider = new auth.GoogleAuthProvider();
    
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
