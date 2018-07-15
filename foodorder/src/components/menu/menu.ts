import { Component, Input } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';
// import { Menu } from '../../type';
import { NavController } from 'ionic-angular';
import { MenuDetailPage } from '../../pages/menu-detail/menu-detail';
import { Menu } from '../../type';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  _key: string;
  @Input() 
  set key(key: string) {
    this._key = key;
  }; 
   
  menu: object;

  constructor(
    private firebaseProvider: FirebaseProvider,
    private navCtrl: NavController) {
  }

  ngOnChanges() {
    this.firebaseProvider.getMenuByKey(this._key).subscribe(
      (value) => {
        this.menu = value;
      }
    );
  }

  gotoMenuDetail() {
    this.navCtrl.push(MenuDetailPage, {menu: this.menu});
    // console.log(this._key);
  }

}
