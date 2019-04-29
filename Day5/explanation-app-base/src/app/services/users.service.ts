import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getStaticUser(): User{

    return {
      name: 'Jose',
      birthDate: '1995-02-08',
      sex: 'male',
      phone: 2345,
      email: 'josema@jose.com'
    }
  }

  public getRemoteUser(): Observable<User> {
    return this.http.get('http://localhost:3000/users/1') as Observable<User>;
  }

  public putRemoteUser(user: User): Observable<User> {
    return this.http.put('http://localhost:3000/users/1',user) as Observable<User>;
  }

}
