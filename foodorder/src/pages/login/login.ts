import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from '../../core/auth.service';
import { ManualValidationService } from "../../core/trigger-validate.service";
import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private validateService: ManualValidationService,
    private authService: AuthService
  ) {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  isFieldValid(field: string) {
    return this.validateService.isFieldValid(this.loginForm, field);
  }
  displayFieldCss(field: string) {
    return this.validateService.displayFieldCss(this.loginForm, field);
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).then(() => {
        this.navCtrl.setRoot(HomePage);
      });
    } else {
      this.validateService.validateAllFormFields(this.loginForm);
    }
  }
  signUp() {
    this.navCtrl.setRoot(SignUpPage);
  }
}
