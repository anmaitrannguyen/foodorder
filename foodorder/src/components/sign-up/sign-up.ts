import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the SignUpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent {

  // email, password, confirm password, fullname, team, location
  email: string;
  password: string;
  confirmPass: String;
  fullName: String;
  team: string;
  location: string;
  phoneNumber: string;

  constructor(private firebaseProvider: FirebaseProvider) {
    
  }

  async signUp() {
    const account = {
      email: this.email,
      password: this.password,
      fullName: this.fullName,
      team: this.team,
      location: this.location,
      phoneNumber: this.phoneNumber,
    }
    console.log(account);
    const user = await this.firebaseProvider.createFirebaseAccount(account);
    console.log(user);
  }

}
