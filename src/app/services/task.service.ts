import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task.model';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  host = environment.springHost;

  public getTasksByUser(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.host + "/users/" + userId + "/tasks");
  }

  public deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(this.host + "/tasks/" + task.id);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.host + "/tasks/" + task.id, task);
  }

  public getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.host + "/tasks/" + id);
  }

  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.host + "/tasks");
  }

  

  public saveTask(task: Task, userId:number): Observable<Task> {
    return this.http.post<Task>(this.host + "/users/" + userId + "/tasks", task);
  }
}
