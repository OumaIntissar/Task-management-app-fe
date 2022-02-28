import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //host = environment.host;
  host = environment.springHost;

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.host + "/users");
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(this.host + "/users/" + id);
  }

  public saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.host + "/users", user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.host + "/users/" + user.id, user);
  }

  public deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(this.host + "/users/" + user.id);
  }
}
