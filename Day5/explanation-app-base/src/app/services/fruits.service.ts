import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../models/Fruit.model'

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }

  public getFruits(): Observable<Fruit[]>{
    return this.http.get(`http://localhost:3000/fruits`) as Observable<Fruit[]>;
  }

  public getFruit(index:number): Observable<Fruit> {
    return this.http.get(`http://localhost:3000/fruits/${index}`) as Observable<Fruit>;
  }

  public putRemoteFruit(fruit: Fruit, index:number): Observable<Fruit> {
    return this.http.put(`http://localhost:3000/fruits/${index}`,fruit) as Observable<Fruit>;
  }

}
