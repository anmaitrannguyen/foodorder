import { Component, Input } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs';
// import { Menu } from '../../type';

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
   
  menu: Observable<any>;

  constructor(private firebaseProvider: FirebaseProvider) {
    console.log(this._key);
    
  }

  ngOnChanges() {
    this.menu = this.firebaseProvider.getMenuByKey(this._key);
  }

}
