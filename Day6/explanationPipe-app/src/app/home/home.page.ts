import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController,
              private TruncatePipe: TruncatePipe,
              private translate: TranslateService) {

  }
  //Podemo hacer INJECTABLE a nuestro pipe para meterlo en los metodos de un controlador
  public async presentToast(): Promise<void>{
    const toast = await this.toastController.create({
      message: this.TruncatePipe.transform('Cambiado', 4),
      duration: 2000,
    });
    toast.present();
  }

  public async presentToastSayHello(): Promise<void>{
    const toast = await this.toastController.create({
      message: this.translate.instant('helloName', {name: 'world'}),
      duration: 2000,
    });
    toast.present();
  }

}
