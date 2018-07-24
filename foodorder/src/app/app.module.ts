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
import { SignUpPage } from '../pages/sign-up/sign-up';
// import { CreateMenuComponent } from '../components/create-menu/create-menu';
import { MenuComponent } from '../components/menu/menu';
import { MenuDetailPage } from '../pages/menu-detail/menu-detail';
import { AllOrderListPage } from '../pages/all-order-list/all-order-list';
import { YourOrderListPage } from '../pages/your-order-list/your-order-list';
import { CreateMenuPage } from '../pages/create-menu/create-menu';

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
    SignUpPage,
    CreateMenuPage,
    MenuComponent,
    MenuDetailPage,
    AllOrderListPage,
    YourOrderListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
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
    SignUpPage,
    CreateMenuPage,
    MenuDetailPage,
    AllOrderListPage,
    YourOrderListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
