import { Component } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(private firebaseProvider: FirebaseProvider) {
  }

  login() {
    const user = this.firebaseProvider.login({email: this.email, password: this.password});
    console.log(user);
  }
}
