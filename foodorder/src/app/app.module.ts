import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from '../core/auth.service';
import { ManualValidationService } from '../core/trigger-validate.service';

import { SignUpPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

const firebaseConfig = {
  apiKey: "AIzaSyDunE-Lj2SZslhlx8YdXw3St9lkHqPwQvE",
  authDomain: "order-food-attemp.firebaseapp.com",
  databaseURL: "https://order-food-attemp.firebaseio.com",
  projectId: "order-food-attemp",
  storageBucket: "order-food-attemp.appspot.com",
  messagingSenderId: "744850049783"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ManualValidationService,
    AngularFireAuth,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
