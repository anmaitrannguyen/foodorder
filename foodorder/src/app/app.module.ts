import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';

import { ValidationService } from '../services/validators';
import { ValidationControlMessages } from '../services/validator.control-ms';

// - Custom layout style
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

// const firebaseConfig = {
//   apiKey: "AIzaSyAP276Ycpd_K-WnndBo2a8e0KgRix9iWVo",
//   authDomain: "foodorder-b2fea.firebaseapp.com",
//   databaseURL: "https://foodorder-b2fea.firebaseio.com",
//   projectId: "foodorder-b2fea",
//   storageBucket: "foodorder-b2fea.appspot.com",
//   messagingSenderId: "965861509741"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDjsXwM16w2gTdxTWvJKp5_4eLEBTtBOTk",
  authDomain: "fodie-e235e.firebaseapp.com",
  databaseURL: "https://fodie-e235e.firebaseio.com",
  projectId: "fodie-e235e",
  storageBucket: "fodie-e235e.appspot.com",
  messagingSenderId: "884674800819"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ValidationControlMessages
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'ios-transition',
      platforms: {
        ios: {
          statusbarPadding: true,
          tabsHideOnSubPages: true
        }
      }
    }),
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ValidationControlMessages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ValidationService
  ]
})
export class AppModule {}
