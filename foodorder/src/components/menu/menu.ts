import { Component, Input } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';
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

  @Input() key;  
  menu: any;

  constructor(private firebaseProvider: FirebaseProvider) {
    console.log(this.key);
    this.menu = firebaseProvider.getMenuByKey(this.key);
  }
}
