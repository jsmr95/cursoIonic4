import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from '../../models/Fruit.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public fruit: Fruit;

  constructor( private fruitsService: FruitsService,
               private route: ActivatedRoute) {

   }
   ngOnInit() {
     const index = this.route.snapshot.params.index;
     this.fruit = this.fruitsService.getFruit(index);
   }


}
