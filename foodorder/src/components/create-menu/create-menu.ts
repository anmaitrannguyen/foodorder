import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../../pages/login/login';
import { Menu } from '../../type';

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
  menu: Menu;

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
  ) {
    this.menu = this.navParams.get('menu') || {};
    
    // this.afAuth.auth.signOut(); 
    this.firebaseProvider.getCurrentUser().subscribe((user) => {
      if(!user) {
        navCtrl.setRoot(LoginPage);
      } else {
        this.uid = user.uid;
      }
    })

    this.menuForm = this.formBuilder.group({
      orderName: ['',  Validators.required],
      description: ['',  Validators.required],
      private: 'false',
    });

    
    this.newFieldForm = formBuilder.group({
      foodName: ['',  Validators.required],
      price: ['',  Validators.required],
    });

    this.menuList = [];

    if(this.menu && Object.keys(this.menu).length) {
      this.menuList = this.menu.foods;
    }
  }

  createMenu = () => {
    if(this.menuForm.valid && this.uid) {
      const sendData = {...this.menuForm.value, foods: this.menuList, uid: this.uid};

      if(this.menu && Object.keys(this.menu).length) {
        const changedMode = this.menu.private !== this.menuForm.value.private;

        if(changedMode) {
          if(sendData.private === 'false') {
          this.firebaseProvider.removePrivateMenuOwnerByKey(sendData.uid, this.menu.id).then(
            () => {
              this.firebaseProvider.createPublicMenuKey(this.menu.id).then(
                (res) => {
                  this.updateData(sendData, changedMode);
                }
              );
            } 
          ).catch(
            (e) => console.log(e)
          );
          } else {
            this.firebaseProvider.createPrivateMenuKey(this.menu.id, sendData.uid).then(
              () => {
              this.firebaseProvider.removePublicMenuByKey(this.menu.id).then(
                (res) => {
                  this.updateData(sendData, changedMode);
                }
              );
            }
          ).catch(
            (e) => console.log(e)
          );
          }

        } else {
          //update data
          this.updateData(sendData, changedMode);
        }
      } else {
        this.firebaseProvider.createMenu(
          sendData
        ).then(() => {
          this.navCtrl.pop();
        });
      }
    }
  }

  updateData = (sendData, changedMode) => {
    this.firebaseProvider.updateMenuByKey(
      this.menu.id, 
      sendData,
      changedMode
    ).then(
      (res) => this.navCtrl.pop()
    ).catch(
      (e) => console.log(e)
    )
  }

  addField = () => {
    if(this.newFieldForm.valid) {
      this.menuList? null : this.menuList = [];
      this.menuList.push(this.newFieldForm.value);
      this.newFieldForm.reset('');
    }
  }
}
