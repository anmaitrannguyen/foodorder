import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CreateMenuComponent } from '../../components/create-menu/create-menu';
import { User } from '../../type';
import { Observable } from 'rxjs';
import { FirebaseListObservable } from 'angularfire2/database';

// import { map } from 'rxjs/operators';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  publicMenus: FirebaseListObservable<any>;
  privateMenus: Observable<any>;   

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
  ) {
    // this.afAuth.auth.signOut(); 
    this.firebaseProvider.getCurrentUser().subscribe((user) => {
      if(!user) {
        navCtrl.setRoot(LoginPage);
      } else {
        this.user = user;
        this.getAllMenuKeys();
      }
    });

    this.publicMenus = [];
    this.privateMenus = [];
  }

  createMenu = () => {
    this.navCtrl.push(CreateMenuComponent);
  }

  getAllMenuKeys = () => {
    this.publicMenus = this.firebaseProvider.getAllPublicMenuKey();
    this.privateMenus = this.firebaseProvider.getAllPrivateOwnerKey(this.user.uid);
  }
 }
