import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CreateMenuComponent } from '../../components/create-menu/create-menu';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: Object;
  menus: Object[];

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
        this.getAllMenu(user);
      }
    })
  }

  createMenu = () => {
    this.navCtrl.push(CreateMenuComponent);
  }

  getAllMenu = (user) => {
    const result = this.firebaseProvider.getAllPublicMenu();

    result.subscribe(
      (values) =>
        {
          this.menus = values;
          console.log(this.menus);
        }
    );
  }
 }
