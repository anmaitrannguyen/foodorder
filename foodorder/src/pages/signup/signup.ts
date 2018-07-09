import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ManualValidationService } from "../../core/trigger-validate.service";
import { MatchPassword } from './match-password';
import { AuthService } from '../../core/auth.service';
import { LoginPage } from '../login/login';

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignUpPage {
  private signUpForm: FormGroup;
  listTeam = [];
  listLocation = [];


  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private validateService: ManualValidationService,
    private authService: AuthService
  ) {
    this.initForm();
    this.listLocation = [
      {value: 'f3', text: '3rd Floor'},
      {value: 'f11', text: '11th Floor'},
      {value: 'f15', text: '15th Floor'},
      {value: 'f16', text: '16th Floor'},
      {value: 'globe', text: 'Globe'}
    ];
    this.listTeam = [
      {value: 'fe', text: 'Front-end'},
      {value: 'be', text: 'Back-end'},
      {value: 'pm', text: 'Project Manager'},
      {value: 'ar', text: 'Architect'},
      {value: 'dm', text: 'Deliver Manager'},
      {value: 'qc', text: 'Quality Control'},
      {value: 'qa', text: 'Quality Assurance'},
      {value: 'dr', text: 'Director'}
    ];
  }

  initForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email],],
      password: ['', Validators.required],
      confirmpass: ['', Validators.required],
      team: ['', Validators.required],
      location: ['', Validators.required]
    },
    {
      validator: [MatchPassword()]
    }
  );
  }
  isFieldValid(field: string) {
    return this.validateService.isFieldValid(this.signUpForm, field);
  }

  displayFieldCss(field: string) {
    return this.validateService.displayFieldCss(this.signUpForm, field);
  }

  onSignup() {
    if (this.signUpForm.valid) {
      this.authService.emailSignUp(this.signUpForm.value).then(() => {
        this.navCtrl.setRoot(LoginPage);
      });

    }
  }
  login() {
    this.navCtrl.setRoot(LoginPage);
  }
}
