import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';

/**
 * Generated class for the YourOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-order-list',
  templateUrl: 'your-order-list.html',
})
export class YourOrderListPage {
  publicMenus;
  privateMenus;
  user;

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    if(!this.user) {
      navCtrl.setRoot(LoginPage);
    } else {
      this.getAllOwnerMenuKeys(this.user.uid);
    }
  }

  getAllOwnerMenuKeys = (uid) => {
    console.log(uid);
    this.publicMenus = this.firebaseProvider.getAllOwnerPublicMenuKey(uid);
    
    this.privateMenus = this.firebaseProvider.getAllPrivateOwnerKey(uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourOrderListPage');
  }
}
