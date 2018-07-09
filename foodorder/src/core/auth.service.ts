import { Injectable } from '@angular/core';
// import * as firebase from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  emailSignUp(info: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(info.email, info.password)
    .then((credential: any) => {
      this.updateUser(credential, info);
    })
    .catch(error => {
      this.handleError(error);
    });
  }

  updateUser(credential:any, data: any) {
    const user = credential.user;
    const info = {
      location: data.location,
      team: data.team
    };
    return this.afs.firestore.app.database().ref('users/' + user.uid).set(info)
    .catch(error => {
      this.handleError(error);
    });
  }

  private handleError(error) {
    console.log(error);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.handleError(err);
      });
  }

}