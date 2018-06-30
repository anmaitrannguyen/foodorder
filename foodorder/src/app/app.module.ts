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
import { LoginComponent } from '../components/login/login';
import { SignUpComponent } from '../components/sign-up/sign-up';
import { FirebaseProvider } from '../providers/firebase/firebase';

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
    LoginComponent,
    SignUpComponent,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
