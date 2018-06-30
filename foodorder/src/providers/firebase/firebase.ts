import { Injectable } from '@angular/core';
import { UserInfo } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../type';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(private afAuth: AngularFireAuth, private firebaseDB: AngularFireDatabase) {
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

  login = async (account: Object) => {
    const cred = await this.afAuth.auth.signInWithEmailAndPassword(account['email'], account['password']);

    return cred.user;
  }
  
}
