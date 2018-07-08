import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: object;
  menuForm: FormGroup;
  newFieldForm: FormGroup;
  menuList: Object[];

  constructor(
    public navCtrl: NavController, 
    private firebaseProvider: FirebaseProvider,
    private formBuilder: FormBuilder
  ) {
    // this.afAuth.auth.signOut(); 
    this.firebaseProvider.getCurrentUser().subscribe((user) => {
      this.user = user;
      if(!user) {
        navCtrl.setRoot(LoginPage);
      }
    })

    this.menuForm = formBuilder.group({
      orderName: ['',  Validators.required],
      description: ['',  Validators.required],
    });

    this.newFieldForm = formBuilder.group({
      foodName: ['',  Validators.required],
      price: ['',  Validators.required],
    });

    this.menuList = [];
  }

  createMenu = () => {
    if(this.menuForm.valid && this.user) {
      // TODO: save menu into DB
    }
  }

  addField = () => {
    if(this.newFieldForm.valid) {
      this.menuList.push(this.newFieldForm.value);
      this.newFieldForm.reset('');
    }
  }
 }
