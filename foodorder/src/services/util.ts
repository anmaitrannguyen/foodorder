import { Loading, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { KEY_STORAGE, CONFIGURE } from './constants';

@Injectable()
export class Util {
  loading: Loading;
  isDidDismiss: boolean = false;
  constructor(public loadingCtrl: LoadingController) {
    this.initLoading();
  }

  initLoading() {
    this.isDidDismiss = false;
    this.loading = this.loadingCtrl.create({
      content: CONFIGURE.loadingText,
    });
    this.loading.onDidDismiss(() => {
      this.isDidDismiss = true;
    });
  }
  showLoading() {
    if (this.isDidDismiss) {
      this.initLoading();
    }
    this.loading.present();
  }

  hideLoading() {
    if (!this.isDidDismiss) {
      this.loading.dismiss();
    }
  }

  setItemStorage(key, value) {
    localStorage.setItem(key, value);
  }
  getItemStorage(key) {
    return localStorage.getItem(key);
  }
  removeItemStorage(key) {
    localStorage.removeItem(key);
  }
}
