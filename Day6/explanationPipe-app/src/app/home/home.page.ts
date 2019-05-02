import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ForoService } from '../services/foro.service';
import { TruncatePipe } from '../pipes/truncate.pipe';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public mensajes = [];

  constructor(private toastController: ToastController,
              private TruncatePipe: TruncatePipe,
              private translate: TranslateService,
            private foroService: ForoService) {

  }

  ngOnInit(){
    this.getMensajes();
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

  public getMensajes(){
    this.foroService.getPostsWithOutBrands().subscribe((posts) => {
      for(let i = 0; i <posts.length; i++){
        this.mensajes.push(posts[i].mensaje);
      }
      return this.mensajes;
    });
}


}
