import { Injectable } from '@angular/core';
import { Fruit } from '../models/Fruit.model'

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  public getFruits(): Fruit[]{
    return [
      {
        'id': 1,
        'name': 'Apple',
        'image': 'apple.png',
        'description': 'The usually round red, green, or yellow fruit of a small tree of the rose family.',
        'link': 'https://www.wikipedia.org/wiki/Apple'
      },
      {
        'id': 2,
        'name': 'Orange',
        'image': 'orange.png',
        'description': 'A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten.',
        'link': 'https://www.wikipedia.org/wiki/Orange_(fruit)'
      },
      {
        'id': 3,
        'name': 'Lemon',
        'image': 'lemon.png',
        'description': 'The yellowish, acid fruit of a subtropical citrus tree.'
      },
      {
        'id': 4,
        'name': 'Pear',
        'image': 'pear.png',
        'description': 'The rounded fruit of a tree of the rose family.',
        'link': 'https://www.wikipedia.org/wiki/Pear'
      },
      {
        'id': 5,
        'name': 'Strawberry',
        'image': 'strawberry.png',
        'description': 'The fleshy red fruit of a stemless plant belonging to the rose family.'
      },
      {
        'id': 6,
        'name': 'Pineapple',
        'image': 'pineapple.png',
        'description': 'A tropical plant having a short stem and rigid, spiny leaves.',
        'link': 'https://www.wikipedia.org/wiki/Pineapple'
      },
      {
        'id': 7,
        'name': 'Watermelon',
        'image': 'watermelon.png',
        'description': 'A large melon with a hard, green rind and sweet, juicy, usually red pulp.',
        'link': 'https://www.wikipedia.org/wiki/Watermelon'
      },
      {
        'id': 8,
        'name': 'Grapes',
        'image': 'grapes.png',
        'description': 'The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.',
        'link': 'https://www.wikipedia.org/wiki/Grape'
      }
    ];
  }

  public getFruit(index:number): Fruit {
    return this.getFruits()[index];
  }

}
