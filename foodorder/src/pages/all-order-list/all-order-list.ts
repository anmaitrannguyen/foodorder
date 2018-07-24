import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';
// import { User } from '../../type';
import { map } from 'rxjs/operators';
import { CreateMenuPage } from '../create-menu/create-menu';

/**
 * Generated class for the AllOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-order-list',
  templateUrl: 'all-order-list.html',
})
export class AllOrderListPage {
  publicMenus;
  privateMenus;
  user;

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
  ) {
    this.user = localStorage.getItem('user');
    this.publicMenus = [];
    if(!this.user) {
      navCtrl.setRoot(LoginPage);
    } else {
      this.getAllMenuKeys(this.user.uid);
    }
  }

  getAllMenuKeys = (uid) => {
    this.firebaseProvider.getAllPublicMenuKey()
    .subscribe(
      (values) => {
        values.forEach(
          (value) => {
          Object.keys(value).forEach(val => {
            this.publicMenus.push(val);
          })
        });
      });
    
    this.privateMenus = this.firebaseProvider.getAllPrivateOwnerKey(uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllOrderListPage');
  }

  ionViewU

  createMenu = () => {
    this.navCtrl.push(CreateMenuPage);
  }
}
