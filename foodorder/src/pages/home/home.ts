import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CreateMenuComponent } from '../../components/create-menu/create-menu';
import { User, Menu } from '../../type';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  menus: Menu[];

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
        this.getAllMenu();
      }
    })
  }

  createMenu = () => {
    this.navCtrl.push(CreateMenuComponent);
  }

  getAllMenu = () => {
    const publicMenus = this.firebaseProvider.getAllPublicMenu();
    const ownerMenus = this.firebaseProvider.getAllMenuOwner(this.user.uid);
    
    publicMenus.subscribe((values) =>
    {
      // const newMenus = values.map((value) => {
      //   return this.menus.findIndex(value.id) > -1;
      // });
      console.log(newMenus);

      // this.menus = this.menus.concat(newMenus);
    });

    ownerMenus.subscribe((values) =>
    {
      // this.menus? this.menus = ;
    });
  }
 }
