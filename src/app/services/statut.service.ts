import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Statut } from '../model/statut.model';
@Injectable({
  providedIn: 'root'
})
export class StatutService {
  
  host = environment.springHost;
  constructor(private http: HttpClient) { }

  public getStatus(): Observable<Statut[]> {
    return this.http.get<Statut[]>(this.host + "/status");
  }

  updateTasksStatut(taskId: number, statutId:number) {
    return this.http.put<Statut>(this.host + "/tasks/" + taskId + "/changeStatut", statutId);
  }

  public deleteStatut(statut: Statut): Observable<void> {
    return this.http.delete<void>(this.host + "/status/" + statut.id);
  }

  public saveStatut(statut: Statut): Observable<Statut> {
    return this.http.post<Statut>(this.host + "/status", statut);
  }



  public getStatut(id: number): Observable<Statut> {
    return this.http.get<Statut>(this.host + "/status/" + id);
  }

  public updateStatut(statut: Statut): Observable<Statut> {
    return this.http.put<Statut>(this.host + "/status/" + statut.id, statut);
  }

 

}
