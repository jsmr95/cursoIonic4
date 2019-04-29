import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {

  }

  //Para mandar alertas
  public async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Cancel pressed!');
        }
      },{
        text: 'OK',
        handler: () => {
          console.log('Ok pressed!');
        }
      }
    ]
    });

    await alert.present();
  }

}
