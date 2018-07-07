import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AngularFireAuth } from 'angularfire2/auth';
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

const config = {
  apiKey: "AIzaSyDEufLizO0QBe-vpXU93MX_6a-YjWllp_E",
  authDomain: "food-order-7b345.firebaseapp.com",
  databaseURL: "https://food-order-7b345.firebaseio.com",
  projectId: "food-order-7b345",
  storageBucket: "food-order-7b345.appspot.com",
  messagingSenderId: "217716187757"
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
    FormsModule,
    ReactiveFormsModule,
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
    AngularFireModule.initializeApp(config),
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
    AngularFireAuth,
    ValidationService
  ]
})
export class AppModule {}
