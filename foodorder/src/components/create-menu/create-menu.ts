import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the CreateMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'create-menu',
  templateUrl: 'create-menu.html'
})
export class CreateMenuComponent {
  menuForm: FormGroup;
  newFieldForm: FormGroup;
  menuList: Object[];
  uid: string;

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
    private formBuilder: FormBuilder,
  ) {
    // this.afAuth.auth.signOut(); 
    this.firebaseProvider.getCurrentUser().subscribe((user) => {
      if(!user) {
        navCtrl.setRoot(LoginPage);
      } else {
        this.uid = user.uid;
      }
    })

    this.menuForm = formBuilder.group({
      orderName: ['',  Validators.required],
      description: ['',  Validators.required],
      private: 'false',
    });

    this.newFieldForm = formBuilder.group({
      foodName: ['',  Validators.required],
      price: ['',  Validators.required],
    });

    this.menuList = [];
  }

  createMenu = () => {
    if(this.menuForm.valid && this.uid) {
      this.firebaseProvider.createMenu(
        {...this.menuForm.value, foods: this.menuList, uid: this.uid}
      ).then((res) => {
        this.navCtrl.pop();
      });
    }
  }

  addField = () => {
    if(this.newFieldForm.valid) {
      this.menuList.push(this.newFieldForm.value);
      this.newFieldForm.reset('');
    }
  }
}
