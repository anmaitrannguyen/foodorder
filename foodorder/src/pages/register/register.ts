import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signUpForm: FormGroup;
  errorMessage: string = '';
  teamList = [
    {key: 'java', value: 'Java Team'},
    {key: 'fe', value: 'Frontend Team'},
    {key: 'php', value: 'PHP Team'},
    {key: 'mobile', value: 'Mobile Team'},
    {key: 'account', value: 'Account Team'},
    {key: 'hr', value: 'HR Team'},
    {key: 'other', value: 'Other'},
  ];
  locationList = [
    {key: 'f3', value: 'Floor 3'},
    {key: 'f11', value: 'Floor 11'},
    {key: 'f15', value: 'Floor 15'},
    {key: 'f16', value: 'Floor 16'},
    {key: 'fg', value: 'Globe Unit'},
  ];

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authProvider: AuthProvider,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      team: '',
      location: '',
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signUp() {
    const data = this.signUpForm.value;

    this.authProvider.signUp(data).then(
      () => this.navCtrl.push(LoginPage),
      err => this.errorMessage = err.message
    );
  }

  goToLogIn() {
    this.navCtrl.push(LoginPage);
  }
}
