import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { auth } from 'firebase/app';
import { Menu } from '../../type';
import 'rxjs/Rx';


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

  loginWithFacebookAccount = () => {
    const provider = new auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  createMenu = (data: Menu) => {
    //save menu
    const menuCollection = this.firebaseDB.list('/menus').push(data);

    if (data.private === 'true') {
      return this.createPrivateMenuKey(menuCollection.key, data.uid);
    } else {
      return this.createPublicMenuKey(menuCollection.key, data.uid);
    }
  }
  createPublicMenuKey = (key, uid) => {
    return this.firebaseDB.object(`/menu-public-map/${uid}/${key}`).set(true);
  }

  createPrivateMenuKey = (key, uid) => {
    return this.firebaseDB.object(`/menu-private-map/${uid}/${key}`).set(true);
  }

  getAllPublicMenuKey = () => {
    return this.firebaseDB.list('/menu-public-map').valueChanges();
  }

  getAllOwnerPublicMenuKey = (uid) => {
    return this.firebaseDB.list(`/menu-public-map/${uid}`).snapshotChanges();
  }

  //TODO: get all private menu owner
  getAllPrivateOwnerKey = (uid) => {
    return this.firebaseDB.list(`/menu-private-map/${uid}`).snapshotChanges();
  }

  getMenuByKey = (id) => {
    return this.firebaseDB.object(`/menus/${id}`).valueChanges();
  }

  updateMenuByKey = (key, data, changedMode) => {
    
    return this.firebaseDB.object(`/menus/${key}`).update(data);
    
  }

  removePublicMenuByKey = (key) => {
    return this.firebaseDB.object(`/menu-public-map/${key}`).remove();
  }

  removePrivateMenuOwnerByKey = (uid, key) => {
    return this.firebaseDB.object(`/menu-private-map/${uid}/${key}`).remove();
  }
}
