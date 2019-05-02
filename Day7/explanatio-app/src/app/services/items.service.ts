import { Injectable } from '@angular/core';
import { Item } from '../models/item.models'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  public getItems(): Item[]{

    const icons = [
      'flask',
      'wifi',
      'beer',
      'football',
      'basketball',
      'paper-plane',
      'american-football',
      'boat',
      'bluetooth',
      'build'
    ];

    const items: Item[] = [];

    for (let i = 1; i < 11; i++) {
      items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }

    return items;
  }

  public getItemByIndex(index:number):Item {
    const items = this.getItems();

    return items[index];
  }

}
