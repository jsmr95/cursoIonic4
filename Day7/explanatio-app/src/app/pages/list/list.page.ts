import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../models/item.models';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit, OnDestroy {

  public items: Item[] = [];

  constructor(private itemsService: ItemsService) {
    this.items = this.itemsService.getItems();

  }

  public ngOnInit() {
    this.items = this.itemsService.getItems();
  }

  public ngOnDestroy(){
    console.log('LIST onDestroy');
  }

  public ionViewDidEnter(){
    console.log('Home ionViewDidEnter');
  }

  public ionViewDidLeave(){
    console.log('Home ionViewDidLeave');
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
