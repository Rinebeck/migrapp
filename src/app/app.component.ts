import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  url: 'https://ceosnewmedia.com';
  public appPages = [{
      title: 'Inicio',
      url:   '/tabs/home',
      icon:  'md-home'
    }];

  constructor(
    private socialSharing: SocialSharing,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
    // Common sharing event will open all available application to share
    share() {
      this.socialSharing.share('MigrAPP', 'Subject', this.url).then((entries) => {
          console.log(this.socialSharing);
          }).catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
        }
}
