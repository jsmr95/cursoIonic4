import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Template driven form',
      url: '/template-driven-form',
      icon: 'clipboard'
    },
    {
      title: 'Reactive form',
      url: '/reactive-form',
      icon: 'clipboard'
    },
    {
      title: 'Fruits List',
      url: '/fruitslist',
      icon: 'remove'
    }
  ];

  public idioma = 'es';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
  ) {
    this.initializeApp();
  }

  ngOnInit(){
    this.translate.use('en');
  }

  initializeApp() {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  }

  changeLanguageEn(){
    return this.idioma == 'en';
  }

  changeLanguageEs(){
    return this.idioma == 'es';
  }
}
