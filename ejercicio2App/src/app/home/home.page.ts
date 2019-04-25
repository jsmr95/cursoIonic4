import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public media:number;
  public likes:number;
  public dislikes:number;
  public mostrarInfo = true;

  constructor(){
    this.media = 0;
    this.likes = 0;
    this.dislikes = 0;
  }

  actualizaMedia(){
    this.media =((this.likes * 10) - (this.dislikes * 0)) / (this.likes + this.dislikes);
  }

  aumentaLike(){
    this.likes++;
  }

  aumentaDislike(){
    this.dislikes++;
  }

  toggleExpandable(){
    this.mostrarInfo = !this.mostrarInfo;
  }

}
