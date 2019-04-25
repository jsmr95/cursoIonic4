import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Fruit} from '../../models/Fruit.model';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})
export class FruitCardComponent implements OnInit {

  @Input() public fruit: Fruit;

  @Output() public deletePressed = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit() {}

  public emiteDeletePressed(): void {
    this.deletePressed.emit();
  }

}
