import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() likes = 0;
  @Input() dislikes = 0;

  public media = 0;

  @Output() public addLike = new EventEmitter<void>();
  @Output() public addDislike = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    //Compruebo si me llega algun parametro predefinido
    this.checkInputs();
  }

  //Aumentar likes y dislikes UNITARIOS
  aumentaLike():void{
    this.likes++;
  }

  aumentaDislike():void{
    this.dislikes++;
  }

  actualizaMedia():void{
    this.media = (+this.likes * 10) / (+this.likes + +this.dislikes);
  }

  //Funciones para actualizar likes y dislikes TOTALES
  public emiteAddLike():void {
    this.addLike.emit();
  }

  public emiteAddDislike():void {
    this.addDislike.emit();
  }

  //Checkeo si me llegan entradas por el selector
  checkInputs():void{
    if (this.likes || this.dislikes){
      this.actualizaMedia();
    }
    //Actualizo los likes y dislikes totales al cargar la pag
    for(let i = 0; i < +this.likes; i++){
      this.emiteAddLike();
    }
    for(let i = 0; i < +this.dislikes; i++){
      this.emiteAddDislike();
    }
  }

}
