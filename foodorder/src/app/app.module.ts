import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { ListproductPage } from '../pages/listproduct/listproduct';

const firebaseConfig = {
  apiKey: "AIzaSyAP276Ycpd_K-WnndBo2a8e0KgRix9iWVo",
  authDomain: "foodorder-b2fea.firebaseapp.com",
  databaseURL: "https://foodorder-b2fea.firebaseio.com",
  projectId: "foodorder-b2fea",
  storageBucket: "foodorder-b2fea.appspot.com",
  messagingSenderId: "965861509741"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAPSqLp6YUnRAGxr1evEMRVePY02gfVAT8",
//   authDomain: "demoionic-aa1ae.firebaseapp.com",
//   databaseURL: "https://demoionic-aa1ae.firebaseio.com",
//   projectId: "demoionic-aa1ae",
//   storageBucket: "demoionic-aa1ae.appspot.com",
//   messagingSenderId: "219639748603"
// };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
		RegisterPage,
		ForgotpassPage,
		ListproductPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
		RegisterPage,
		ForgotpassPage,
		ListproductPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
  ]
})
export class AppModule {}
