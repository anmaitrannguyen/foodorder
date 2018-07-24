import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
// import { CreateMenuComponent } from '../../components/create-menu/create-menu';
import { User } from '../../type';
// import { Observable } from 'rxjs';

// import { map } from 'rxjs/operators';
import { AllOrderListPage } from '../all-order-list/all-order-list';
import { YourOrderListPage } from '../your-order-list/your-order-list';
import { CreateMenuPage } from '../create-menu/create-menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// export class HomePage {
//   allOrder = AllOrderListPage;
//   yourOrder = YourOrderListPage;
//   user: User;
//   constructor(
//     public navCtrl: NavController,
//     private firebaseProvider: FirebaseProvider,
//   ) {

//     this.firebaseProvider.getCurrentUser().subscribe((user) => {
//       if(!user) {
//         navCtrl.setRoot(LoginPage);
//       } else {
//         this.user = user;
//         localStorage.setItem('user', JSON.stringify(this.user));
//       }
//     })
//   }

//   openMenu() {
//     this.menuCtrl.open();
//   }

// }
export class HomePage {
  user: User;
  allOrder = AllOrderListPage;
  yourOrder = YourOrderListPage; 

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
    public menuCtrl: MenuController,
  ) {
    menuCtrl.enable(true);
    // this.afAuth.auth.signOut(); 
    this.firebaseProvider.getCurrentUser().subscribe((user) => {
      if(!user) {
        navCtrl.setRoot(LoginPage);
      } else {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });

    // this.publicMenus = [];
    // this.privateMenus = [];
  }

  createMenu = () => {
    this.navCtrl.push(CreateMenuPage);
  }
  
}
