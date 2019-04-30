import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/Fruit.model';
import { FruitsService } from '../../services/fruits.service';
import {ActivatedRoute} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.page.html',
  styleUrls: ['./fruitslist.page.scss'],
})
export class FruitslistPage implements OnInit {

  public fruits: Fruit[];

  public state = {
    loading: true,
    loaded: false,
    error: false,
  }

  constructor( private fruitsService: FruitsService ) {
  }

  ngOnInit() {
    this.peticionGet();
  }

  ionViewDidEnter(){
    // this.peticionGet();
    console.log('hola');
  }

  public retry():void {
    this.state ={
      loading: true,
      loaded: false,
      error: false,
    };
    this.peticionGet();
  }

  public peticionGet(){
    this.fruitsService.getFruits()
      .subscribe((fruits: Fruit[]) => {
        this.fruits = fruits;
        this.state.loaded =true;
        this.state.loading =false;
        this.state.error =false;
    }, (error: HttpErrorResponse) => {
      console.log('Error!!... ', error);
      this.state.error = true;
      this.state.loading = false;
    }
  ) }

}
