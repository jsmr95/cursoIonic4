import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/Fruit.model';
import { FruitsService } from '../../services/fruits.service';


@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.page.html',
  styleUrls: ['./fruitslist.page.scss'],
})
export class FruitslistPage implements OnInit {

  public fruits: Fruit[];

  constructor( private fruitsService: FruitsService ) {
    this.fruits = fruitsService.getFruits();
  }
  
  ngOnInit() {
  }

}
