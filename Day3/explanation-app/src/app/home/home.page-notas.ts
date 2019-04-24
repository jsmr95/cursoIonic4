import { Component } from '@angular/core';

interface User {
  id:number;
  name:string;
  isMarried: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private _title: string;

  private isAuthorized: boolean;

  public get title(): string {
    return this._title;
  }

  public set title(title:string) {
    this._title = title;
  }

  constructor() {
    console.log('Hello World!');

    let isAvailable:boolean;

    let counter: number;

    let name: string;

    let primes: number[];

    enum Direction {
      Up,
      Down,
      Left,
      Right,
    }

    let d: Direction;
    d = Direction.Up;

    let someVariable: any;

    let user1: User;

    user1 =  {id:4, name: 'Jose', isMarried: true};

  }

  private checkAuthorization(user: User){
    if (user.id){
      this.isAuthorized = true;
    }
  }


}
