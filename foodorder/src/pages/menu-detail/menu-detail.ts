import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from '../../type';
import { Observable } from 'rxjs';
import { CreateMenuComponent } from '../../components/create-menu/create-menu';

/**
 * Generated class for the MenuDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menu-detail.html',
})
export class MenuDetailPage {
  menu: Observable<any>;
  // key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = navParams.get('menu');
    console.log(this.menu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetailPage');
  }

  editMenu = () => {
    this.navCtrl.push(CreateMenuComponent, {menu: this.menu});
  }
}
