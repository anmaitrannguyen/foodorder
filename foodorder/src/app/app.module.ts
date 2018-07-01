import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { ResetPasswordComponent } from '../components/reset-password/reset-password';
import { LoginPage } from '../pages/login/login';
import { SignOutComponent } from '../components/sign-out/sign-out';

const firebaseConfig = {
  apiKey: "AIzaSyCMbCyfvJjjEv-cPZMiIHMqiV2Sov4ChU8",
  authDomain: "food-order-8f19c.firebaseapp.com",
  databaseURL: "https://food-order-8f19c.firebaseio.com",
  projectId: "food-order-8f19c",
  storageBucket: "food-order-8f19c.appspot.com",
  messagingSenderId: "149697204310"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResetPasswordComponent,
    LoginPage,
    SignOutComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResetPasswordComponent,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
