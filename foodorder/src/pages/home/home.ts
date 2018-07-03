import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;

  constructor(
    private navParams: NavParams,
  ) {
    const user = this.navParams.get('user');
    if(user) {
      this.email = user.email;
    }
  }

}
