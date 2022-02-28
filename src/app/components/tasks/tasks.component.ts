import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Statut } from 'src/app/model/statut.model';
import { StatutService } from 'src/app/services/statut.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  userId: number;
  constructor(private taskService: TaskService,
    private statutService: StatutService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.userId = activatedRoute.snapshot.params['id'];
  }
  tasks?: Task[];
  status?: Statut[];
  ngOnInit(): void {
    this.getTasksByUser(this.userId);
    this.getAllStatus();
  }
  onChangeStatut(task: Task, statut: Statut) {
    this.statutService.updateTasksStatut(task.id, statut.id)
      .subscribe(data => {
        alert("Success statut changed");
        this.getTasksByUser(this.userId);
      })

  }
  getAllStatus() {
    this.statutService.getStatus().subscribe(data => {
      this.status = data;
    })
  }

  getTasksByUser(userId: number) {
    this.taskService.getTasksByUser(userId).subscribe(data => {
      this.tasks = data;
    })
  }

  onNewTask() {
    this.router.navigateByUrl("/users/" + this.userId + "/newTask");
  }

  onEdit(task: Task) {
    this.router.navigateByUrl("/users/" + this.userId + "/editTask/" + task.id);
  }

  onDelete(task: Task) {
    let v = confirm("Are you sure ?");
    if (v == true)
      this.taskService.deleteTask(task)
        .subscribe(data => {
          this.getTasksByUser(this.userId);
        })
    else this.getTasksByUser(this.userId);
  }

  backtoTaskPage() {
    this.router.navigateByUrl("/users/" + this.userId + "/tasks");
  }

}
