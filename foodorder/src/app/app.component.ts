import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CreateMenuComponent } from '../components/create-menu/create-menu';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // used for an example of ngFor and navigation
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.pages = [
        { title: 'Create Menu', component: CreateMenuComponent },
        { title: 'Menu List', component: CreateMenuComponent },
        { title: 'Your Order', component: CreateMenuComponent },
      ];
      statusBar.styleDefault();
      // splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

