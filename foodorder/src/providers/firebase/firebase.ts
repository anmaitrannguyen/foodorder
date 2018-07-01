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
    const cred = await this.afAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']);
    const userCollection = this.firebaseDB.list('/users');

    //update firebase user profile
    await cred.user.updateProfile({
      displayName: account['fullName'],
      photoURL: null,
    });

    //create custom user with firebase user id
    await userCollection.set(cred.user.uid, 
      {
        team: account['team'], 
        location: account['location'], 
        phoneNumber: account['phoneNumber'],
      });

    return cred.user;
  }

  authUser = async (account: Object) => {
    try {
      const cred = await this.afAuth.auth.signInWithEmailAndPassword(account['email'], account['password']);
      return {user: cred.user, message: ""};
    } catch (e) {
      console.log(e);
      return {user: '', message: e.message}
    }
  }
  
  forgotPassWord = async (email: string) => {
    // let user;
    try {
      const cred = await this.afAuth.auth.sendPasswordResetEmail(email);
      return "";
    } catch (e){
      return {message: e.message}
    }
  }

  signOut = async () => {
   await this.afAuth.auth.signOut();
  }

  getCurrentUser = async () => {
    await this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        return {
          displayName: user.displayName,
          email: user.email,
        };
      } else {
        return null;
      }
    });
  }
}
